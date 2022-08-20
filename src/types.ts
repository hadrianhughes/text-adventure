export type Maybe<T> = T | null

export type Result<T> = Either<Error, T>

export type Either<T, U> = { left: T } | { right: U }

export const left = <T = unknown>(e: Either<T, unknown>): Maybe<T> => 'left' in e ? e.left : null

export const right = <T = unknown>(e: Either<unknown, T>): Maybe<T> => 'right' in e ? e.right : null
