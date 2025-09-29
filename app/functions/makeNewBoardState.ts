export default function mekeNewBoardState(
  boardState,
) {
  const newBoardState = []
  boardState.forEach((piece) => {
    newBoardState.push({...piece})
  })
  return newBoardState
}