import React, { Component } from 'react';
// import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
// import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';

class App extends Component {
  render() {
    return (
      <div>
        <UserForm/>    
        </div>
    );
  }
}
export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Products/>
//       </div>
//     );
//   }
// }
// export default App;


// class App extends Component {
//   render() {
//     const isValid = true;
//     return (
//       <div>
//         <Products />
//         <Button variant="primary" disabled={!isValid}>Default</Button>
//       </div>
//     );
//   }
// }
//   export default App;


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Products />
//         <Button>Default</Button>
//         <Button variant="danger">Default</Button>
//         <Button variant="primary" disabled>Default</Button>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends Component {
//   formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }
//   render() {
//     const user = {
//       firstName: 'Greg',
//       lastName: 'Lim'
//     };
//     return (
//       <div>
//         <h1>Hello, {this.formatName(user)}</h1>
//       </div>
//     );
//   }
// }
// export default App;



// Note: imported react then changed from function based to a class based 
// Now our return is inside a render()


// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Fast!
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
