
import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null) // con 9 posiciones y fill  para rellenar
const Square = ({children,isSelected, updateBoard, index })=>{
  const className = `square ${isSelected}? 'is-selected':''`
  return(
    <div className={className}>
      {children}
    </div>
  )
}
function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) // con 9 posiciones y fill  para rellenar
  const [turn, setTurn] =useState(TURNS.X)

  return (
    
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <section className='game'>
        {
          board.map((_, index) =>{
            return (
              <Square
                key={index}
                index={index}
              >

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
    </main>
  )
}

export default App