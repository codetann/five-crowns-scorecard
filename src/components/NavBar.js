import React, { useRef } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar({ round, setScore, players }) {
  const input1 = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    players.push({
      id: players.length,
      name: input1.current.value,
      score: 0,
    });
    input1.current.value = null;
    setScore(players);
  };

  return (
    <>
      <Navbar className="navbar" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          {round <= 0 ? "Five Crowns" : `Round ${round}`}
        </Navbar.Brand>
        {round <= 0 && (
          <Form
            style={{
              display: "flex",
            }}
            onSubmit={handleAdd}
          >
            <FormControl
              ref={input1}
              type="text"
              placeholder="Enter Name"
              className="mr-sm-2"
            />
            <Button
              className="add-btn"
              onClick={handleAdd}
              variant="outline-light"
            >
              Add
            </Button>
          </Form>
        )}
      </Navbar>
    </>
  );
}
