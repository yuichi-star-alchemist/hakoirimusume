"use client"

import { useEffect } from "react"
import CompletedModal from "./compornents/CompletedModal"
import GuideModal from "./compornents/GuideModal"
import MoveOptions from "./compornents/MoveOptions"
import Piece from "./compornents/Piece"
import checkIsCompleted from "./functions/checkIsCompleted"
import makeNewBoardState from "./functions/makeNewBoardState"
import useHooks from "./hooks"

export default function App() {
  const {
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
  } = useHooks()
  const pieces = Array(boardState.length).fill(null).map((val, idx) => {
    const piece = boardState[idx]
    return (
      <Piece
        key={piece.id}
        coodinate={{
          x: [piece.x, piece.x + piece.w],
          y: [piece.y, piece.y + piece.h],
        }}
        id={piece.id}
        backgroundDesignation={ piece.name === "娘" ? "bg-[#FFEF6C]" : null }
        boardState={ boardState }
        userChoiceRef={ userChoiceRef }
        setShowModal={ setShowModal }
        setBoardState={ setBoardState }
        emptyCellsRef={ emptyCellsRef }
        isCompleted={ isCompleted }
      >
        { piece.name }
      </Piece>
    )
  })

  useEffect(() => {
    if (checkIsCompleted(boardState)) setIsCompleted(true)
  })

  return (
    <main
      className="h-full w-[480px] mx-auto text-center select-none"
    >
      {
        isCompleted ? <CompletedModal /> : null
      }
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
        { showModal ? <MoveOptions
                        boardState={boardState}
                        userChoiceRef={userChoiceRef}
                        setShowModal={setShowModal}
                        setBoardState={setBoardState}
                        emptyCellsRef={emptyCellsRef}
                      /> : null }
        {// 開発用
          isCompleted ?
            null :
            <button
              className="bg-orange-200 p-2 rounded-3xl"
              onClick={() => setBoardState((prev) => {
                const newBoardState = makeNewBoardState(prev)
                const musume = newBoardState[1]
                musume.x = 2
                musume.y = 4
                return newBoardState
              })}
            >
              クリアする
            </button>
        }{/* 開発用 */}
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
