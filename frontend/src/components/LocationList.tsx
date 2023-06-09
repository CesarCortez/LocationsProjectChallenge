import React, { useEffect, useState } from "react";
import { Location } from "../types";
import { getLocations, deleteLocation } from "../services/apiService";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Row, Col } from "react-bootstrap";

interface LocationListProps {
  onView: (location: Location) => void;
  refreshLocations: boolean;
}

const LocationList: React.FC<LocationListProps> = ({
  onView,
  refreshLocations,
}) => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    loadLocations();
  }, [refreshLocations]);

  const loadLocations = async () => {
    try {
      const response = await getLocations();
      setLocations(response.data);
    } catch (error) {
      console.error("Error while fetching locations:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this location?")) {
      try {
        await deleteLocation(id);
        loadLocations();
      } catch (error) {
        console.error("Error while deleting location:", error);
      }
    }
  };

  return (
    <div data-testid="location-list">
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
                      data-testid={"view-button-" + index}
                      className="btn-block"
                      variant="info"
                      onClick={() => onView(location)}
                    >
                      View
                    </Button>
                  </Col>
                  <Col className="d-grid gap-2">
                    <Button
                      data-testid={"delete-button" + index}
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
