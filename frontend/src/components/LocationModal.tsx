import React, { useState } from "react";
import { Location } from "../types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { Row, Col, Form } from "react-bootstrap";
import { addLocation } from "../services/apiService";

interface LocationModalProps {
  location: Location;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ location, onClose }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const newLocation: Location = {
      _id: Math.random().toString(),
      name,
      address,
    };
    await addLocation(newLocation);
    setName("");
    setAddress("");
    onClose();
  };

  return (
    <>
      <Modal show={true} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Location Data</Modal.Title>
        </Modal.Header>
        {location._id === "" || !location._id ? (
          <div>
            {/*ADD FORM */}
          </div>
        ) : (
          <div>
            <Modal.Body>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={location._id}>
                    <td>{location.name}</td>
                    <td>{location.address} </td>
                  </tr>
                </tbody>
              </Table>
              <Row>
                <Col>
                  {/*ADD LOGIC AND COMPONENT FOR MAPS */}
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  onClose();
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </div>
        )}
      </Modal>
    </>
  );
};

export default LocationModal;
