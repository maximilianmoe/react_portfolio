import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './component/GlobalStyle';
import Nav from "./component/Nav";
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import {Switch, Route, useLocation} from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import {AnimatePresence} from 'framer-motion';


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
