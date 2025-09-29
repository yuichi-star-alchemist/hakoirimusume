import movePiece from "../functions/movePiece"

export default function Piece({
  children,
  coodinate,
  id,
  backgroundDesignation,
  boardState,
  userChoiceRef,
  setShowModal,
  setBoardState,
  emptyCellsRef,
}: {
  children: string
  coodinate: {
    x: [number, number],
    y: [number, number],
  }
}) {
  const backgroundColor = backgroundDesignation != null ? backgroundDesignation : "bg-red-200"
  const hoverStyle = "hover:bg-red-400"
  return (
    <button
      className={`border rounded-xl flex items-center cursor-pointer ${backgroundColor} ${hoverStyle}`}
      style={{
        gridRowStart: coodinate.y[0],
        gridRowEnd: coodinate.y[1],
        gridColumnStart: coodinate.x[0],
        gridColumnEnd: coodinate.x[1],
      }}
      onClick={() => movePiece(
        id,
        null,
        boardState,
        userChoiceRef,
        setShowModal,
        setBoardState,
        emptyCellsRef,
      )}
    >
      <p
        className="text-6xl mx-auto"
      >
        { children }
      </p>
    </button>
  )
}