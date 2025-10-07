import { BoardState, Piece } from "../types"

export default function mekeNewBoardState(
  boardState: BoardState,
): BoardState {
  const newBoardState: BoardState = []
  boardState.forEach((piece: Piece) => {
    newBoardState.push({...piece})
  })
  return newBoardState
}