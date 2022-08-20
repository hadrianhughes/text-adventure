import { Action } from '../action'
import { right, Result } from '../types'
import lex, { LexResult } from './lexer'
import _parse from './parser'

const parse = (input: string): Result<Action> => {
  const lexResult = lex(input)
  const _lexed = right<LexResult>(lexResult)
  if (!_lexed) {
    return lexResult as Result<Action>
  }

  return _parse(_lexed)
}

export default parse
