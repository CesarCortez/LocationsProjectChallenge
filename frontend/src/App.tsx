import React, { useState } from "react";
import LocationList from "./components/LocationList";
import LocationModal from "./components/LocationModal";
import AddLocation from "./components/AddLocation";
import { Location } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container } from "react-bootstrap";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [refreshLocations, setRefresh] = useState(false);
  const [modalLocation, setModalLocation] = useState<Location | null>(null);

  const handleView = (location: Location) => {
    setModalLocation(location);
    setShowModal(true);
  };

  const handleAdd = (location: Location) => {
    setRefresh(false);
    setModalLocation(location);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalLocation(null);
    setShowModal(false);
    setRefresh(true);
  };

  return (
    <Container className="mt-5">
      <AddLocation onAdd={handleAdd} />
      <LocationList onView={handleView} refreshLocations={refreshLocations} />
      {showModal && (
        <LocationModal location={modalLocation!} onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default App;
