import React from "react";
import { Location } from "../types";
interface LocationListProps {
  location: Location;
}

const GoogleMap: React.FC<LocationListProps> = ({location:Location}) => {
  // Implement the Google Maps integration here
  let key = process.env.REACT_APP_GOOGLEKEY;
  let url = `https://www.google.com/maps/embed/v1/place?key=${key}&q=${Location.address}`;
  return (
    <div>
      <iframe width="100%" title="Location Map" src={url}></iframe>
    </div>
  );
};

export default GoogleMap;
