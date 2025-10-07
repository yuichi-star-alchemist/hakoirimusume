import { Dispatch, RefObject, SetStateAction } from "react"
import movePiece from "../functions/movePiece"
import { BoardState, EmptyCells, UserChoice } from "../types"

export default function Piece({
  children,
  coodinate,
  id,
  backgroundDesignation = null,
  boardState,
  userChoiceRef,
  setShowModal,
  setBoardState,
  emptyCellsRef,
  isCompleted,
}: {
  children: string
  coodinate: {
    x: [number, number],
    y: [number, number],
  }
  id: number
  backgroundDesignation: string | null
  boardState: BoardState
  userChoiceRef: RefObject<UserChoice>
  setShowModal: Dispatch<SetStateAction<boolean>>
  setBoardState: Dispatch<SetStateAction<BoardState>>
  emptyCellsRef: RefObject<EmptyCells>
  isCompleted: boolean
}) {
  const backgroundColor = backgroundDesignation != null ? backgroundDesignation : "bg-red-200"
  const hoverStyle = "hover:bg-red-400"
  const onClick = isCompleted ?
    () => {} :
    () => movePiece(
      id,
      -1,
      boardState,
      userChoiceRef,
      setShowModal,
      setBoardState,
      emptyCellsRef,
    )
  return (
    <button
      className={`border rounded-xl flex items-center cursor-pointer ${backgroundColor} ${hoverStyle}`}
      style={{
        gridRowStart: coodinate.y[0],
        gridRowEnd: coodinate.y[1],
        gridColumnStart: coodinate.x[0],
        gridColumnEnd: coodinate.x[1],
      }}
      onClick={onClick}
    >
      <p
        className="text-6xl mx-auto"
      >
        { children }
      </p>
    </button>
  )
}