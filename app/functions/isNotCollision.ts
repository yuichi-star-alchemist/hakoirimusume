import { Directions, EmptyCells } from "../types"

export default function isNotCollision(
  toWantToMoveDirections: Directions,
  emptyCellsRef: React.RefObject<EmptyCells>,
): boolean {
  let matchCount = 0
  for (let i=0; i<toWantToMoveDirections.length; i++) {
    const dx = toWantToMoveDirections[i].x
    const dy = toWantToMoveDirections[i].y
    for (let j=0; j<emptyCellsRef.current.length; j++) {
      const emptyX = emptyCellsRef.current[j].x
      const emptyY = emptyCellsRef.current[j].y
      if (
        dx === emptyX &&
        dy === emptyY
      ) matchCount++
    }
  }
  return matchCount === toWantToMoveDirections.length
}