import { BOARD_HEIGHT, BOARD_WIDTH } from "../constants"

export default function isOnBoard(
  toWantToMoveDirections: {x: number, y: number}[],
) {
  const minX = 1
  const minY = 1
  const maxX = BOARD_WIDTH
  const maxY = BOARD_HEIGHT
  const dx = toWantToMoveDirections[0].x
  const dy = toWantToMoveDirections[0].y
  
  return (
    dx >= minX &&
    dx <= maxX &&
    dy >= minY &&
    dy <= maxY
  )
}