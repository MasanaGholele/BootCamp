import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';


function App() {

const user = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/products/:category">
          <ProductList />
        </Route>

        <Route path="/product/:id">
          <Product />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login/>}
        </Route>

        <Route path="/register">
        {user ? <Redirect to="/" /> : <Register/>}
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
