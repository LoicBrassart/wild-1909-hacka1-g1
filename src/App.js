import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilmPage from "./components/FilmPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/FilmPage" component={FilmPage} />
          <Route path="/movie/:id" component={FilmPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
