export type Piece = {
  id: number,
  name: string,
  x: number,
  y: number,
  w: number,
  h: number,
}

export type BoardState = Piece[]

export type EmptyCells = {
  x: number,
  y: number,
}[]

export type DirectionNames = string[]

export type UserChoice = {
  pieceId: number,
  moveChoices: number[],
}

export type Directions = {
  x: number,
  y: number,
}[]