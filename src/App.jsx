import { useState } from 'react'
import profile from '/kuba.jpg'
import './App.css'

function App() {
    colors: ["red", "yellow", "blue", "green", "purple", "pink"]

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
        <a href="https://kuba.go.kg" target="_blank">
          <img height={200} src={profile} className="my profile" alt="Profile" />
        </a>
      </div>
      <h1>Kuba Asanov</h1>
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
