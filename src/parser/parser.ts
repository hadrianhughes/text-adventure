import { Action, ActionType, ApproachAction, isActionType, WalkAction } from '../action'
import { Result } from '../types'
import { LexResult } from './lexer'

type Parser<T> = (args: string[]) => Result<T>

const parseApproach: Parser<ApproachAction> = args => ({
  right: {
    type: 'approach',
    payload: args.join(' '),
  },
})

const parseWalk: Parser<WalkAction> = args => ({
  right: {
    type: 'walk',
    payload: args.join(' '),
  },
})

const parse = ([mainCmd, args]: LexResult): Result<Action> => {
  if (!isActionType(mainCmd)) {
    return { left: new Error(`${mainCmd} is not a valid command`) }
  }

  const _mainCmd: ActionType = mainCmd
  switch (_mainCmd) {
    case 'approach':
      return parseApproach(args)
    case 'walk':
      return parseWalk(args)
    default:
      throw new Error(`internal parse error: ${mainCmd} is not a valid command and was not caught during parse`)
  }
}

export default parse
