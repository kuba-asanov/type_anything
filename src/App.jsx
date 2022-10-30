import { useState, useEffect } from "react";
import profile from "/kuba.jpg";
import "./App.css";

function App() {
  const textForms = [
    "uppercase",
    "capitalize",
    "lowercase",
    "revert",
    "full-width",
  ];
  const [isMobile, setIsMobile] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [textTransform, setTextTransform] =
    useState("");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    setColor(
      "#" + ((Math.random() * 16777215) | 0).toString(16)
    );

    setTextTransform(
      textForms[
        Math.floor(
          Math.random() * textForms.length - 1
        )
      ]
    );
  }, [message]);

  function onChangeValue(e) {
    const { value } = e.target;

    setMessage(value);
  }

  return (
    <div className="App">
      <div>
        <a href="https://kuba.go.kg" target="_blank">
          <img height={200} src={profile} className="my profile" alt="Profile" />
        </a>
      </div>
      <h1 style={{
            color: color,
            textTransform,
          }}>
            Kuba Asanov
      </h1>
      <label style={{
            color: color,
            textTransform,
          }} htmlFor="message">My Textarea</label>
      <div>
        <textarea
          id="message"
          name="message"
          onChange={onChangeValue}
          value={message}
          style={{
            color: color,
            textTransform,
          }}
          cols={isMobile ? 30 : 80}
          rows={isMobile ? 3 : 5}
        />
      </div>
    </div>
  );
}

export default App;
