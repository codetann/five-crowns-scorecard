import React from "react";
import { Button } from "react-bootstrap";

export default function End({
  setCounter,
  setStart,
  setScore,
  players,
  setRound,
}) {
  const winner = () => {
    const temp = players.map((item) => item.score);
    const w = Math.min(...temp);
    const i = temp.indexOf(w);
    return players[i].name;
  };

  const resetGame = () => {
    setScore([]);
    setRound(0);
    setCounter(0);
    setStart(false);
  };

  return (
    <div className="end">
      <h1>{winner()} wins!</h1>
      <Button onClick={resetGame}>Play Again</Button>
    </div>
  );
}
