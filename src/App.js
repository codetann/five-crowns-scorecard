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
  const players = score.slice();

  const handleRound = () => {
    if (players.length < 2) {
      console.log("here");
      return;
    } else {
      setRound(round + 1);
    }
  };

  return (
    <div className="App">
      {round > 11 && (
        <End
          players={players}
          score={score}
          setScore={setScore}
          setRound={setRound}
        />
      )}
      <NavBar
        round={round}
        score={score}
        setScore={setScore}
        players={players}
      />
      <div className="players-container">
        {players.map((item) => (
          <Player
            key={uuidv4()}
            round={round}
            data={item}
            score={score}
            setScore={setScore}
            players={players}
          />
        ))}
        <div className="next-btn">
          <Button
            onClick={handleRound}
            size="lg"
            block
            disabled={players.length < 2 ? true : false}
          >
            {round <= 0 ? "Start Game" : "Next Round"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
