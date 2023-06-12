import React, { Component } from 'react';
import Products from './Products';


// class App extends Component {
  
//     render() {
    
//     return (
//       <div>
//         <h1>My Second React App!</h1>
//         <Products/>

//       </div>
//     );
//   }
// }
// export default App;

class App extends Component {
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  render() {
    const user = {
      firstName: 'Masana',
      lastName: 'Gholele'
    };
    return (
      <div>
        <h1>Hi there, {this.formatName(user)}</h1>
      </div>
    );
  }
}
export default App;



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
