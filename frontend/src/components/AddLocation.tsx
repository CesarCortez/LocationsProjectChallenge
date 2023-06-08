
import Button from "react-bootstrap/Button";
import { Location } from "../types";

interface LocationAddProps {
  onAdd: (location: Location) => void;
}

const AddLocation: React.FC<LocationAddProps> = ({ onAdd }) => {
  return (
    <div>
      {" "}
      <Button
        variant="success"
        onClick={() => onAdd({ _id: "", address: "", name: "" })}
      >
        Add location
      </Button>
    </div>
  );
};

export default AddLocation;
