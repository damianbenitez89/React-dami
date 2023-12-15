import { Square } from "./Square"

export function WinnerModal ({winner, resetGame}){

    if (winner===null) return null

    return(
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