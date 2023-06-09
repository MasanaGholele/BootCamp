import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import User from './User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div>
        {/* <User />  We'll get to the user through routing now*/}
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/edit/:id" element={<UserForm />} />
              <Route path="/add" element={<UserForm />} />
              <Route path="/" element={<User />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App; // no need to export anymore since it is in this component

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}


// class App extends Component {
//   constructor() {
//     super();
//     console.log(firebase);
//   }
//   render() {

//     return (
//       <div>
//         <h1>testing firebase</h1>
//       </div>
//     );
//   }
// }


// export default App;