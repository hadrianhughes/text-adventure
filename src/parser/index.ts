import { Action } from '../action'
import { Result, eitherBind } from '../types'
import lex from './lexer'
import _parse from './parser'

const parse = (input: string): Result<Action> => {
  const lexResult = lex(input)
  const mparse = eitherBind(_parse)
  return mparse(lexResult)
}

export default parse
