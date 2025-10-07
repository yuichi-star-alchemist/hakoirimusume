import { Dispatch, RefObject, SetStateAction } from "react"
import { BoardState, EmptyCells, UserChoice } from "../types"
import isNotCollision from "./isNotCollision"
import isOnBoard from "./isOnBoard"
import makeNewBoardState from "./makeNewBoardState"
import updateEmptyCells from "./updateEmptyCells"

export default function movePiece(
  pieceId: number,
  moveDirection: number,
  boardState: BoardState,
  userChoiceRef: RefObject<UserChoice>,
  setShowModal: Dispatch<SetStateAction<boolean>>,
  setBoardState: Dispatch<SetStateAction<BoardState>>,
  emptyCellsRef: RefObject<EmptyCells>,
) {
  const newBoardState = makeNewBoardState(boardState)
  const moveDirections = []
  const piece = newBoardState[pieceId]
  for (let i=0; i<4; i++) {
    // i: 上下左右の順で動かせるか試行
    const toWantToMoveDirections = []
    for (let j=0; j<piece.w; j++) {
      for (let k=0; k<piece.h; k++) {
        if (
          i <= 1 && k < piece.h - 1 ||
          i >= 2 && j < piece.w - 1
        ) continue
        const adjustX = i === 2 ? -1 :
                        i === 3 ? piece.w :
                                  j
        const adjustY = i === 0 ? -1 :
                        i === 1 ? piece.h :
                                  k
        const dx = piece.x + adjustX
        const dy = piece.y + adjustY
        const direction = {
          x: dx,
          y: dy
        }
        toWantToMoveDirections.push(direction)
      }
    }
    if (
      isOnBoard(toWantToMoveDirections) &&
      isNotCollision(toWantToMoveDirections, emptyCellsRef)
    ) {
      moveDirections.push(i)
    }
  }

  if (moveDirection >= 0 || moveDirections.length === 1) {
    switch(moveDirection >= 0 ? moveDirection : moveDirections[0]) {
      case 0:
        piece.y--
        break
      case 1:
        piece.y++
        break
      case 2:
        piece.x--
        break
      case 3:
        piece.x++
        break
    }
  }
  if (moveDirection < 0 && moveDirections.length === 2) {
    userChoiceRef.current.pieceId = pieceId
    userChoiceRef.current.moveChoices = moveDirections
    setShowModal(true)
    return
  }

  setShowModal(false)
  setBoardState(newBoardState)
  updateEmptyCells(newBoardState, emptyCellsRef)
}