import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    colors: ["red", "yellow", "blue", "green", "purple", "pink"]

  const [count, setCount] = useState(0)

  const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    // 👇️ update textarea value
    setMessage(event.target.value);
    const { colors } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <label htmlFor="message">My Textarea</label>
      <div>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        cols={80}
        rows={5}
      />
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
