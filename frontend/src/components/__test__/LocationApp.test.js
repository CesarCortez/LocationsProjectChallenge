import {
  render,
  screen,
  fireEvent,
  container
} from "@testing-library/react";
import App from "../../App";


describe("Location List App", () => {
  test("renders location list", async () => {
    render(<App />, container);

    expect(
      await screen.findByText(
        (content, element) => element.tagName.toLowerCase() === "tbody"
      )
    ).toBeInTheDocument();

    const locationListElement = screen.getByTestId("location-list");

    expect(locationListElement).toBeInTheDocument();
  });

  test("renders add location modal", () => {
    render(<App />);

    const addLocationButton = screen.getByText("Add location");
    fireEvent.click(addLocationButton);

    const addLocationModal = screen.getByTestId("add-location-modal");

    expect(addLocationModal).toBeInTheDocument();
  });

  test("adds a new location", () => {
    render(<App />);

    const addLocationButton = screen.getByText("Add location");
    fireEvent.click(addLocationButton);

    const nameInput = screen.getByLabelText("Name:");
    const addressInput = screen.getByLabelText("Address:");

    fireEvent.change(nameInput, { target: { value: "New Location" } });
    fireEvent.change(addressInput, { target: { value: "123 Main St" } });
    const saveButton = screen.getByTestId("save-button");

    expect(saveButton).toBeInTheDocument();
  });
});
