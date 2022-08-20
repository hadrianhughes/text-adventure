import { Action, ActionType, ApproachAction, isActionType, WalkAction } from '../action'
import { Result } from '../types'
import { LexResult } from './lexer'

const parseApproach = (args: string[]): Result<ApproachAction> => ({
  right: {
    type: 'approach',
    payload: args.join(' '),
  },
})

const parseWalk = (args: string[]): Result<WalkAction> => ({
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
