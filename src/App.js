import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Player from "./components/Player";
import NavBar from "./components/NavBar";
import End from "./components/End";
import "./style/style.css";

function App() {
  const [score, setScore] = useState([]);
  const [round, setRound] = useState(0);
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const players = score.slice();

  const handleRound = () => {
    if (players.length < 2) {
      console.log("here");
      return;
    } else {
      setRound(round + 1);
      setStart(true);
      setCounter(0);
    }
  };

  return (
    <div className="App">
      {round > 11 && (
        <End
          setCounter={setCounter}
          setStart={setStart}
          players={players}
          score={score}
          setScore={setScore}
          setRound={setRound}
        />
      )}
      <NavBar
        setStart={setStart}
        round={round}
        score={score}
        setScore={setScore}
        players={players}
      />
      <div className="players-container">
        {players.map((item) => (
          <Player
            key={uuidv4()}
            counter={counter}
            setCounter={setCounter}
            round={round}
            data={item}
            score={score}
            setScore={setScore}
            players={players}
          />
        ))}
        <div className="next-btn">
          {round <= 0 && (
            <Button
              onClick={handleRound}
              size="lg"
              block
              disabled={players.length < 2 ? true : false}
            >
              Start Game
            </Button>
          )}
          {start && (
            <Button
              onClick={handleRound}
              size="lg"
              block
              disabled={
                counter === players.length || counter > players.length
                  ? false
                  : true
              }
            >
              Next Round
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
