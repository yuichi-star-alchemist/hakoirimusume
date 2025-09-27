"use client"

import { useRef, useState } from "react"
import GuideModal from "./compornents/GuideModal"
import Piece from "./compornents/Piece"

export default function App() {
  const initialBoard = [
    {
      id: 0,
      name: "父",
      x: 1,
      y: 1,
      w: 1,
      h: 2,
    },
    {
      id: 1,
      name: "娘",
      x: 2,
      y: 1,
      w: 2,
      h: 2,
    },
    {
      id: 2,
      name: "母",
      x: 4,
      y: 1,
      w: 1,
      h: 2,
    },
    {
      id: 3,
      name: "祖父",
      x: 1,
      y: 3,
      w: 1,
      h: 2,
    },
    {
      id: 4,
      name: "兄弟",
      x: 2,
      y: 3,
      w: 2,
      h: 1,
    },
    {
      id: 5,
      name: "祖母",
      x: 4,
      y: 3,
      w: 1,
      h: 2,
    },
    {
      id: 6,
      name: "犬",
      x: 1,
      y: 5,
      w: 1,
      h: 1,
    },
    {
      id: 7,
      name: "鳥",
      x: 2,
      y: 4,
      w: 1,
      h: 1,
    },
    {
      id: 8,
      name: "兎",
      x: 3,
      y: 4,
      w: 1,
      h: 1,
    },
    {
      id: 9,
      name: "猫",
      x: 4,
      y: 5,
      w: 1,
      h: 1,
    },
  ]
  const initialEmptyCells = [
    {
      x: 2,
      y: 5,
    },
    {
      x: 3,
      y: 5,
    },
  ]
  const BOARD_WIDTH = 4
  const BOARD_HEIGHT = 5
  const directionNames = [
    "上",
    "下",
    "左",
    "右",
  ]
  const [boardState, setBoardState] = useState(initialBoard)
  const [showModal, setShowModal] = useState(false)
  const [showGuide, setShowGuide] = useState(false)
  const emptyCells = useRef(initialEmptyCells)
  const userChoice = useRef({
    pieceId: null,
    moveChoices: [],
  })
  const pieces = Array(boardState.length).fill(null).map((val, idx) => {
    const piece = boardState[idx]
    return (
      <Piece
        key={piece.id}
        coodinate={{
          x: [piece.x, piece.x + piece.w],
          y: [piece.y, piece.y + piece.h],
        }}
        onClick={() => movePiece(piece.id, null)}
        backgroundDesignation={ piece.name === "娘" ? "bg-[#FFEF6C]" : null }
      >
        { piece.name }
      </Piece>
    )
  })

  const guideOptions = (
    <div>
      <p
        className="text-3xl mt-2"
      >
        どちらに動かしますか？
      </p>
      {
        Array(userChoice.current.moveChoices.length).fill(null).map((val, idx) => {
          return (
            <button
              key={idx}
              className="h-16 w-16 rounded-full border mx-2 mt-2 text-3xl cursor-pointer"
              onClick={() => movePiece(userChoice.current.pieceId, userChoice.current.moveChoices[idx])}
            >
              { directionNames[userChoice.current.moveChoices[idx]] }
            </button>
          )
        })
      }
    </div>
  )


  function movePiece(clickedPieceId, moveDirection) {
    const newBoardState = []
    const moveDirections = []
    boardState.forEach((piece) => {
      newBoardState.push({...piece})
    })
    const piece = newBoardState[clickedPieceId]
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
        isNotCollision(toWantToMoveDirections)
      ) {
        moveDirections.push(i)
      }
    }

    if (moveDirection != null || moveDirections.length === 1) {
      switch(moveDirection != null ? moveDirection : moveDirections[0]) {
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
    if (moveDirection === null && moveDirections.length === 2) {
      userChoice.current.pieceId = clickedPieceId
      userChoice.current.moveChoices = moveDirections
      setShowModal(true)
      return
    }

    setShowModal(false)
    setBoardState(newBoardState)
    updateEmptyCells(newBoardState)
  }

  function isNotCollision(
    toWantToMoveDirections: {x: number, y: number}[],
  ) {
    let matchCount = 0
    for (let i=0; i<toWantToMoveDirections.length; i++) {
      const dx = toWantToMoveDirections[i].x
      const dy = toWantToMoveDirections[i].y
      for (let j=0; j<emptyCells.current.length; j++) {
        const emptyX = emptyCells.current[j].x
        const emptyY = emptyCells.current[j].y
        if (
          dx === emptyX &&
          dy === emptyY
        ) matchCount++
      }
    }
    return matchCount === toWantToMoveDirections.length
  }

  function isOnBoard(
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

  function updateEmptyCells(newBoardState) {
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
    emptyCells.current.splice(0)
    for (let i=0; i<seriesArray.length; i++) {
      for (let j=0; j<seriesArray[i].length; j++) {
        if (!seriesArray[i][j]) {
          const direction = {
            x: j + 1,
            y: i + 1
          }
          emptyCells.current.push(direction)
        }
      }
    }
  }


  return (
    <main
      className="h-full w-[480px] mx-auto text-center select-none"
    >
      {
        showGuide ? <GuideModal setShowGuide={setShowGuide}/> : null
      }
      <div
        className="h-1/5 bg-green-400 opacity-90"
      >
        <button
          className="bg-yellow-300 rounded-md block ml-auto px-1 mr-1 cursor-pointer"
          onClick={() => setShowGuide((prev) => !prev)}
        ><p>どんなゲーム？</p></button>
        { showModal ? guideOptions : null }
      </div>
      <div
        className="h-4/5 bg-gray-300 pb-[26px] px-5 grid grid-cols-4 grid-rows-5"
      >
        { pieces }
      </div>
      <p
        className="rounded-md h-[26px] w-[220px] bg-red-500 mx-auto -translate-y-[26px]"
      >
        ゴール
      </p>
    </main>
  )
}
