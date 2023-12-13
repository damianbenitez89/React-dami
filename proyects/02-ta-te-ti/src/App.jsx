
import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null) // con 9 posiciones y fill  para rellenar
const Square = ({children,isSelected, updateBoard, index })=>{

  const className = `square ${isSelected? 'is-selected':''}`

  const handleClick = ()=>{
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WIINER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) // con 9 posiciones y fill  para rellenar
  const [turn, setTurn] =useState(TURNS.X)
  const [winner, setWinner]=useState(null)

const checkWinner= (boardToCheck) => {
  for (const combo of WIINER_COMBOS){
    const [a,b,c] =combo
    if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
      return boardToCheck[a]
    }
  }
  return null
}

const resetGame = () =>{
  setBoard(Array(9).fill(null))
  setWinner(null)
  setTurn(TURNS.X)
}
const updateBoard = (index) =>{
  //si el indice tiene un valor no va a poder modificarse
  if(board[index] || winner) return
  //le doy un valor a los indece de la tablar X u O
  const newBoard = [...board]
  newBoard[index]=turn
  setBoard(newBoard)
  //cambio de turno cuando hacer click
  const newTurn = turn === TURNS.X ? TURNS.O: TURNS.X
  setTurn(newTurn)
  const newWinner =  checkWinner(newBoard)
  if(newWinner){
    setWinner(newWinner)
  }
}

  return (
    
    <main className='board'>
      <h1>TA TE TI</h1>
      <section className='game'>
        {
          board.map((_, index) =>{
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn=== TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn=== TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {
        winner != null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner ===false
                  ?'empate'
                  :'el ganador es '+winner
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <button onClick={resetGame}>Epezar de nuevo</button>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
