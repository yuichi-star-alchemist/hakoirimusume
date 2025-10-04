import { BoardState } from "../types";

export default function checkIsCompleted(
  boardState: BoardState,
): boolean {
  return (
    boardState[1].x === 2 &&
    boardState[1].y === 4
  )
}