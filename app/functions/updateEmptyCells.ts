import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
} from "../constants";

export default function updateEmptyCells(newBoardState,emptyCellsRef) {
  const seriesArray = Array(BOARD_HEIGHT)
    .fill(null)
    .map(() => Array(BOARD_WIDTH).fill(false))
  newBoardState.forEach((piece) => {
    for (let i=0; i<piece.w; i++) {
      for (let j=0; j<piece.h; j++) {
        seriesArray[piece.y + j - 1][piece.x + i - 1] = true
      }
    }
  })
  emptyCellsRef.current.splice(0)
  for (let i=0; i<seriesArray.length; i++) {
    for (let j=0; j<seriesArray[i].length; j++) {
      if (!seriesArray[i][j]) {
        const direction = {
          x: j + 1,
          y: i + 1
        }
        emptyCellsRef.current.push(direction)
      }
    }
  }
}