# React Charting Application

This is a React.js application that displays a chart using the Recharts library. The chart supports timeframe breakdown, zooming, and interactive click events. The chart data is provided in JSON format.

## Features

- **Timeframe Breakdown**: View the chart data by daily, weekly, or monthly intervals.
- **Interactive Click Events**: Click on data points to view more details.
- **Export as PNG**: Export the chart as a PNG image.

## Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/my-chart-app.git
    cd my-chart-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    npm start
    ```

4. **Open in Browser**:
    Open your browser and go to `http://localhost:3000`

## Project Structure

- **src/components/Chart.js**: The chart component using Recharts.
- **src/components/TimeframeSelector.js**: The component to switch between different timeframes.
- **src/data/data.json**: The JSON file containing the chart data.
- **src/App.js**: The main App component combining the chart and the timeframe selector.
- **src/App.css**: Basic styling for the application.

## Usage

- **Select Timeframe**: Use the buttons to switch between daily, weekly, and monthly views.
- **Export Chart**: Click the "Export as PNG" button to save the chart as an image.

## Example JSON Data

Example data used in the application is stored in `src/data/data.json`:

json:
[
  { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
  { "timestamp": "2023-01-03T00:00:00Z", "value": 5 }
]

**Deployment**
To deploy the application, i have used render platform and followed these steps:

1.Build the Application:
npm run build

2.Remove the text /build in the .gitignore file

3.Then push the updated code into the GitHub repository.

4Then we have successfully deployed our project on render.
