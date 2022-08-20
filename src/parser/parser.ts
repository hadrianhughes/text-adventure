import { Action, ActionType, ApproachAction, isActionType, WalkAction } from '@action'
import { Result } from 'types'
import { LexResult } from './lexer'

const parseApproach = (args: string[]): Result<ApproachAction> => {
  if (args.length === 0 || args.length > 1) {
    return { left: new Error('`approach` command accepts a single argument') }
  }

  return {
    right: {
      type: 'approach',
      payload: args[0],
    },
  }
}

const parseWalk = (args: string[]): Result<WalkAction> => {
  if (args.length === 0 || args.length > 1) {
    return { left: new Error('`approach` command accepts a single argument') }
  }

  return {
    right: {
      type: 'walk',
      payload: args[0],
    },
  }
}

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
