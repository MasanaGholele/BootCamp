import React, { Component } from 'react';
import GitHub from './GitHub';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import GitHubUser from './GitHubUser';

class App extends Component {
  render() { // First, in App, we render a Header component
    return (
      <div>
        <Header />
      </div>
    );
  }
}
export default App;
class Header extends Component {
  render() {
    return (
      // tells the router which component to render
      // when the window’s location changes ("associate it to a path")
      <BrowserRouter>
        <div>
          {/* The Navbar component  is taken from react-bootstrap and it provides
              for a professional-looking navigation bar */}
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* Routes(Switch) component only displays the first route that matches (to avoid showing more than one component). This assures that only one of these
              routes will be rendered */}
          <Routes>
            {/*  After installing the react-router-dom library, we need to define our routes.*/}
           {/* route that takes in two route parameters */}
            <Route path="/github/user/:login/:id" element={<GitHubUser/>} />
            {/* if the path contains 'GitHub', React should create an instance of GitHubComponent and render it in the DOM. */}
            <Route path="/github" element={<GitHub />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* the path '/*' is a wildcard that catches all invalid routes and directs to NotFoundComponent. */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>

      </BrowserRouter>
    )
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}
class About extends Component {
  render() {
    return (
      <div>
        About
      </div>
    )
  }
}