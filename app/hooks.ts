import { useRef, useState } from "react";
import {
  initialBoard,
  initialEmptyCells,
} from "./constants";
import { BoardState, EmptyCells, UserChoice } from "./types";

export default function useHooks() {
  const emptyCellsRef = useRef<EmptyCells>(initialEmptyCells)
  const userChoiceRef = useRef<UserChoice>({
    pieceId: 0,
    moveChoices: [],
  })
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showGuide, setShowGuide] = useState<boolean>(false)
  const [boardState, setBoardState] = useState<BoardState>(initialBoard)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  return {
    emptyCellsRef,
    userChoiceRef,
    showModal,
    setShowModal,
    showGuide,
    setShowGuide,
    boardState,
    setBoardState,
    isCompleted,
    setIsCompleted,
  }
}