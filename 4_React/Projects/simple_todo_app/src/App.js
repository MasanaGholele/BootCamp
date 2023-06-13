import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoApp from "./todo/TodoApp";
class App extends React.Component {
  render() {
    return (
      <TodoApp />
    );
  }
}
export default App;