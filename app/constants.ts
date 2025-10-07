import { BoardState, DirectionNames, EmptyCells } from "./types"

const initialBoard: BoardState = [
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
const initialEmptyCells: EmptyCells = [
  {
    x: 2,
    y: 5,
  },
  {
    x: 3,
    y: 5,
  },
]
const directionNames: DirectionNames = [
  "上",
  "下",
  "左",
  "右",
]
const BOARD_WIDTH: number = 4
const BOARD_HEIGHT: number = 5

export {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  directionNames,
  initialBoard,
  initialEmptyCells
}

