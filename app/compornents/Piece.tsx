
export default function Cell({
  children,
  coodinate,
  onClick,
  backgroundDesignation,
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