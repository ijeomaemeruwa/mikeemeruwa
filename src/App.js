import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import PreLoader from './components/PreLoader'

const Home = lazy(() => import("./views/Home"), {
  fallback: <PreLoader />,
});
const AboutPage = lazy(() => import("./views/About/AboutPage"), {
  fallback: <PreLoader />,
});
const Portfolio = lazy(() => import("./views/Portfolio/Portfolio"), {
  fallback: <PreLoader />,
});

const App = () => {
  return (
    <>
  <Router>
    <Suspense fallback>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/about"><AboutPage /></Route>
      <Route exact path="/portfolio"><Portfolio /></Route> 
    </Switch>
    </Suspense>
    <ScrollToTop />
    </Router>
    
    </>
  );
}

export default App;
