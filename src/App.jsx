import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [nameresult, setNameResult] = useState(false);
  const [reset, setReset] = useState(false);
  const [nameArrey, setNameArry] = useState([]);
  const [isActive, setIsActive] = useState(null);
  // const [animationClass, setAnimationClass] = useState('');

  const submitName = () => {
    setNameArry([...nameArrey, name]);
    setName("");
  };
  const deletename = (i) => {
    const updatedArray = [...nameArrey];
    updatedArray.splice(i, 1);
    setNameArry(updatedArray);
  };

  const animation = () => {
    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * nameArrey.length);
      } while (randomIndex === isActive);

      setIsActive(randomIndex);
    }, 200); // Change every 2 seconds

    return setTimeout(() => {
      setReset(true);
      clearInterval(interval);
      setNameResult(true);
    }, 10000);
  };

  const resetAll = () => {
    setNameArry([]);
    setNameResult(false);
    setIsActive(null);
    setReset(false)
  };

  return (
    <>
      <div className="container">
        <h1>Random Name Generate</h1>

        <div className="input-box">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className=""
            placeholder="enter name"
          />
          <button onClick={submitName}>Enter</button>
        </div>
        <div className="random-box">
          <ul>
            {nameArrey.map((name, i) => (
              <li key={i} className={isActive === i ? "animate" : ""}>
                {i + 1}. {name}
                <a className="delete" onClick={() => deletename(i)}>
                  Delete
                </a>
              </li>
            ))}
          </ul>
          {reset ? (
            <button className="animebtn" onClick={() => resetAll()}>
              Clear
            </button>
          ) : (
            <button className="animebtn" onClick={() => animation()}>
              Play
            </button>
          )}
        </div>
        {nameresult ? (
          <>
        
          <p className="nameresult"><span className="emoji">🙋</span>
          {nameArrey[isActive]} name is selected</p>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
