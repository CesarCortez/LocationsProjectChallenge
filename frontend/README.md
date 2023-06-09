# Location Project Frontend

This is the frontend component of the Location application. It provides a user interface for adding, viewing, and deleting locations.

## Table of Contents

- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Technologies

- React
- TypeScript
- Google Maps JavaScript API

## Getting Started

Follow the steps below to get the frontend up and running:

1. Clone the repository:

2. Install the dependencies:

```bash
cd frontend
npm install
```

3. Set up Google Maps API Key:

- Sign up for a Google Maps API key.

- Create a .env file in the root directory of the project.

- Add the following environment variable:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>
```

4. Start the development server:
```bash
npm start

```

The application will open in your default browser at http://localhost:3000.

## Features
The Location Tracker application allows you to perform the following actions:

- Add a new location:

  - Click on the "Add location" button to open a modal.
  - Enter the name and address of the location in the form.
  - Click "Save" to add the location to the list.
  - Click "Cancel" to discard the changes.
- View location details:

  - Click on the "View" button next to a location to open a modal.
  - The modal displays the address of the location and shows a point on the Google Map.
- Delete a location:

  - Click on the "Delete" button next to a location.
  - A confirmation prompt will appear.
  - Click "Delete" to remove the location from the list.
  - Click "Cancel" to cancel the deletion.
## Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

When contributing, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and test them thoroughly.
- Commit your changes with descriptive commit messages following best practices.
- Push your changes to your forked repository.
- Submit a pull request to the main branch of the original repository.

## Testing
To run the tests, run the following command:

```bash
npm run test
```
## License
This project is licensed under the MIT License.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
