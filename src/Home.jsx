import GameBoard from "./GameBoard"
import Player from "./components/Player"


function Home() {

  return (
    <>
      <Player initialName="Player 1" symbol="X" />
      <Player initialName="Player 2" symbol="O" idPlayer="1" />
      <GameBoard />
    </>
  )
}

export default Home
