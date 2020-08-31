import React from 'react';
import './App.css';
import './assets/main.css';
import Board from './components/Board';
import Card from './components/Card';


function App() {
  let al = ("abcdefghijklmnopqrstuvwxyz").split("");
  console.log(al);

  const reset = e => {
    e.preventDefault();   
    window.location.reload(false);
  };

  return (
    <div className="App">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">Alphabet Game</span>
        </div>
      </nav>
      <button onClick={e => reset(e)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Reset</button>
      <main className= "wrap">
          <Board id="board-1" className="board" >
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
