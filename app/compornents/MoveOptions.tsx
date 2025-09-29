import { directionNames } from "../constants"
import movePiece from "../functions/movePiece"

export default function MoveOptions({
  boardState,
  userChoiceRef,
  setShowModal,
  setBoardState,
  emptyCellsRef,  
}) {
  const pieceId = userChoiceRef.current.pieceId
  return (
    <div>
      <p
        className="text-3xl mt-2"
      >
        どちらに動かしますか？
      </p>
      {
        Array(userChoiceRef.current.moveChoices.length).fill(null).map((val, idx) => {
          const moveDirection = userChoiceRef.current.moveChoices[idx]
          return (
            <button
              key={idx}
              className="h-16 w-16 rounded-full border mx-2 mt-2 text-3xl cursor-pointer"
              onClick={() => movePiece(
                pieceId,
                moveDirection,
                boardState,
                userChoiceRef,
                setShowModal,
                setBoardState,
                emptyCellsRef,
              )}
            >
              { directionNames[userChoiceRef.current.moveChoices[idx]] }
            </button>
          )
        })
      }
    </div>
  )
}