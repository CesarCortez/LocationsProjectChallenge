import React, { useEffect, useState } from "react";
import { Location } from "../types";
import { getLocations } from "../services/apiService";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Row, Col } from "react-bootstrap";


const LocationList: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = async () => {
    try {
      const response = await getLocations();
      setLocations(response.data);
    } catch (error) {
      console.error("Error while fetching locations:", error);
    }
  };

  const handleDelete = async (id: string) => {
    //add logic to delete location
  };

  return (
    <div>
      <h2>List of Locations:</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={location._id}>
              <td>{index + 1}</td>
              <td>{location.name}</td>
              <td>{location.address} </td>
              <td>
                <Row>
                  <Col className="d-grid gap-2">
                    <Button
                      className="btn-block"
                      variant="info"
                    >
                      View
                    </Button>
                  </Col>
                  <Col className="d-grid gap-2">
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(location._id)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LocationList;
