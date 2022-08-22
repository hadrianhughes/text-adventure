export type Maybe<T> = T | null

export type Either<T, U> = { left: T } | { right: U }

export const left = <T = unknown>(e: Either<T, unknown>): Maybe<T> => 'left' in e ? e.left : null

export const right = <T = unknown>(e: Either<unknown, T>): Maybe<T> => 'right' in e ? e.right : null

export type Result<T> = Either<Error, T>

export const eitherBind = <T, U, V>(f: (x: T) => Either<V, U>): ((mx: Either<V, T>) => Either<V, U>) => mx => {
  const l = left(mx)
  if (l) {
    return { left: l }
  }

  const r = right(mx)
  return f(r as T)
}
