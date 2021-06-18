import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Ladakh from "./components/pages/Ladakh";
import Goa from "./components/pages/Goa";
import Manali from "./components/pages/Manali";
import Kerela from "./components/pages/Kerela";
import Agra from "./components/pages/Agra";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/ladakh" component={Ladakh} />
          <Route path="/goa" component={Goa} />
          <Route path="/manali" component={Manali} />
          <Route path="/kerela" component={Kerela} />
          <Route path="/agra" component={Agra} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
