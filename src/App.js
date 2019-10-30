import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FilmPage from "./components/FilmPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <NavBar />
          <Route exact path="/" component={MainPage} />
          <Route path="/FilmPage" component={FilmPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
