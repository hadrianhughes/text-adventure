import { Result } from 'types'

export type LexResult = [string, string[]]

const lex = (input: string): Result<LexResult> => {
  const topMatch = input.match(/^(.+?) +(.*)$/)
  if (!topMatch) {
    return { left: new Error(`could not parse input: ${input}`) }
  }

  const [_, mainCmd, args] = topMatch
  return { right: [mainCmd, args.split(' ')] }
}

export default lex
