import React from 'react';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';


function App() {
  let al = ("abcdefghijklmnopqrstuvwxyz").split("");
  console.log(al);

  return (
    <div className="App">
      <h1>Alphabet Game</h1>
      <main className= "flexbox">
          <Board id="board-1" className="board">
            { al.map((letter, i) => {
                 return <Card key={i} id={`card-${i}`} className="card" draggable="true">
                  <p>{letter}</p>
                </Card>
              })
              
            }
          </Board>

          <Board id="board-2" className="board">
            
          </Board>
      </main>
    </div>
  );
}

export default App;
