import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { routes } from "./common/routes";

function App() {
  return (
    <Container fluid className="App">
      {routes}
    </Container>
  );
}

export default App;
