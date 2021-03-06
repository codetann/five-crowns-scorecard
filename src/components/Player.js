import React, { useRef } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Player({
  setCounter,
  counter,
  round,
  score,
  setScore,
  players,
  data,
}) {
  const input1 = useRef(null);
  const handleScore = (e) => {
    e.preventDefault();
    if (isNaN(parseInt(input1.current.value))) {
      e.preventDefault();
    } else {
      e.preventDefault();
      players[data.id].score =
        parseInt(score[data.id].score) + parseInt(input1.current.value);
      setScore(players);
      setCounter(counter + 1);
    }
  };

  return (
    <div className="player">
      <div className="info">
        <h1>{data.name}</h1>
        <h4 className="score">Score: {data.score}</h4>
      </div>

      <Form className="form" onSubmit={handleScore}>
        <FormControl
          type="number"
          ref={input1}
          disabled={round <= 0 ? true : false}
        />
        <Button onClick={handleScore} disabled={round <= 0 ? true : false}>
          +
        </Button>
      </Form>
    </div>
  );
}
