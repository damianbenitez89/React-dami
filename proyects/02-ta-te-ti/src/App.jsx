
import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS, WIINER_COMBOS} from './enums.js'
import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'

const board = Array(9).fill(null) // con 9 posiciones y fill  para rellenar

function App() {
  const [board, setBoard] = useState(() =>{
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage? JSON.parse(boardFromLocalStorage):Array(9).fill(null) // con 9 posiciones y fill  para rellenar
  })
    const [turn, setTurn] =useState(()=>{
      const turnFromLocalStorage = window.localStorage.getItem('turn')

      return turnFromLocalStorage?? TURNS.X})

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
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkEndGame = (newBoard) =>{
    return newBoard.every((square) => square != null)
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
     //guardar partida en locastorage
     window.localStorage.setItem('board', JSON.stringify(newBoard))
     window.localStorage.setItem('turn', newTurn)
     //revisa si hay ganador
    const newWinner =  checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }
    else if(checkEndGame(newBoard)){
      setWinner(false)
    }


  }

  return (
    
    <main className='board'>
      <h1>TA TE TI</h1>
      <button onClick={resetGame}>Resetear el juego</button>
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
      <WinnerModal resetGame={resetGame} winner={winner}/>  
    </main>
  )
}

export default App
