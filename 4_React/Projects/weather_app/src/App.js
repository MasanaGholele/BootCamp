import React from "react";
import './App.css';
// used bootstrap 4 to create a responsive weather app
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// created a cloud using the bootstrap icon
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import WeatherApp from "./weather/WeatherApp";


class App extends React.Component {
  render() {
    return (
      <WeatherApp />
    );
  }
}
export default App;