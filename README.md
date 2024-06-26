# React Charting Application

This React.js application displays a dynamic chart using the Recharts library, supporting various features like timeframe breakdown, zooming, and export functionality.

## Features

- **Timeframe Breakdown**: View data by daily, weekly, or monthly intervals.
- **Interactive Click Events**: Click on data points to view details.
- **Export as PNG**: Download the chart as a PNG image.

## Setup Instructions

Follow these steps to set up and run the application locally:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/react-charting-app.git
    cd react-charting-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    npm start
    ```

4. **View in Browser**:
    Open your web browser and go to `http://localhost:3000`

## Project Structure

- **src/components/Chart.js**: Main chart component using Recharts.
- **src/components/TimeframeSelector.js**: Component for selecting timeframe intervals.
- **src/data/data.json**: Example JSON data for charting.
- **src/App.js**: Main application component.
- **src/App.css**: Basic styles for the application.

## Usage

- **Select Timeframe**: Use the buttons (Daily, Weekly, Monthly) to switch between different time intervals and view corresponding data.
- **Click Events**: Click on data points in the chart to display detailed information.
- **Export Chart**: Click the "Export as PNG" button to save the chart as an image file.

## Testing and Debugging

- **Cross-Browser Testing**: Ensure compatibility across major browsers like Chrome, Firefox, Safari, and Edge.
- **Device Testing**: Verify responsiveness on various devices including desktops, tablets, and smartphones.
- **Functionality Check**: Test timeframe breakdown, zooming, click events, and export functionality to ensure they work as expected.

## Example Data

Example JSON data used in the application (`src/data/data.json`):

```json
[
  { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
  { "timestamp": "2023-01-03T00:00:00Z", "value": 5 }
]
```

## Deployment

To deploy the application, i have used render platform and followed these steps:

1. **Build the Application**:
    ```bash
    npm run build
    ```

2. **Deploy the `build` Directory**:
    Deploy the contents of the `build` directory to your web server or hosting platform.

3.Remove the text /build in the .gitignore file

4.Then push the updated code into the GitHub repository.

5.Then we have successfully deployed our project on render.


