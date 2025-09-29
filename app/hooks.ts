import { useRef, useState } from "react";
import {
  initialBoard,
  initialEmptyCells,
} from "./constants";

export default function useHooks() {
  const emptyCellsRef = useRef(initialEmptyCells)
  const userChoiceRef = useRef({
    pieceId: null,
    moveChoices: [],
  })
  const [showModal, setShowModal] = useState(false)
  const [showGuide, setShowGuide] = useState(false)
  const [boardState, setBoardState] = useState(initialBoard)

  return {
    emptyCellsRef,
    userChoiceRef,
    showModal,
    setShowModal,
    showGuide,
    setShowGuide,
    boardState,
    setBoardState,
  }
}