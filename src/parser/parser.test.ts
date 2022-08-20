import { left, right } from '../types'
import parser from '.'

describe('parser: base', () => {
  it('Should return an error on the left when given gibberish input', () => {
    const result = parser('xyzsef')
    expect(right(result)).toBe(null)
    expect(left(result) instanceof Error).toBe(true)
  })

  it('Should return an error on the left when given an empty string as input', () => {
    const result = parser('')
    expect(right(result)).toBe(null)
    expect(left(result) instanceof Error).toBe(true)
  })
})

describe('parser: approach cmd', () => {
  it('Should return an error on the left when the command has no arguments', () => {
    const result = parser('approach')
    expect(right(result)).toBe(null)
    expect(left(result) instanceof Error).toBe(true)
  })

  it('Should return an ApproachAction when the input is valid', () => {
    const result = parser('approach tree')
    expect(left(result)).toBe(null)
    expect(right(result)).toEqual({
      type: 'approach',
      payload: 'tree',
    })
  })

  it('Should return an ApproachAction with payload including spaces when given a more than 2 word input', () => {
    const result = parser('approach left tree')
    expect(left(result)).toBe(null)
    expect(right(result)).toEqual({
      type: 'approach',
      payload: 'left tree',
    })
  })
})

describe('parser: walk cmd', () => {
  it('Should return an error on the left when the command has no arguments', () => {
    const result = parser('walk')
    expect(right(result)).toBe(null)
    expect(left(result) instanceof Error).toBe(true)
  })

  it('Should return a WalkAction when the input is valid', () => {
    const result = parser('walk north')
    expect(left(result)).toBe(null)
    expect(right(result)).toEqual({
      type: 'walk',
      payload: 'north',
    })
  })

  it('Should return an ApproachAction with payload including spaces when given a more than 2 word input', () => {
    const result = parser('walk left road')
    expect(left(result)).toBe(null)
    expect(right(result)).toEqual({
      type: 'walk',
      payload: 'left road',
    })
  })
})
