import React, { useState } from "react";
import LocationList from "./components/LocationList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container } from "react-bootstrap";

const App: React.FC = () => {

  return (
    <Container className="mt-5">
      <LocationList/>
    </Container>
  );
};

export default App;
