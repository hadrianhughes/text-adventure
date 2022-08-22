import { Action } from '../action'
import { Result, eitherBind } from '../types'
import lex from './lexer'
import _parse from './parser'

const parse = (input: string): Result<Action> => eitherBind(_parse)(lex(input))

export default parse
