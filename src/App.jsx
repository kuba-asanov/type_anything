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
      <h1>Kuba Asanov</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
    </div>
  )
}

export default App
