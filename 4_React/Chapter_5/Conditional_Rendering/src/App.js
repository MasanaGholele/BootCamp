import React, { Component } from 'react';
import JumboTronComponent from './JumboTronComponent';
import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';

class App extends Component {
  render() {
    return (
      <div>
{/* the string in between an opening and closing tag, the string is passed as a special prop */}
        <JumboTronComponent>
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.
        </JumboTronComponent>      
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


