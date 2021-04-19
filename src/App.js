import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
  Home,
  AboutPage,
  Portfolio
 } from './views'
import ScrollToTop from './components/ScrollToTop';
// import PreLoader from './components/PreLoader'

const App = () => {
  return (
    <>
  <Router>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/about"><AboutPage /></Route>
      <Route exact path="/portfolio"><Portfolio /></Route> 
      {/* <Route exact path="/article/:id"><Article /></Route> */}
    </Switch>
    <ScrollToTop />
    </Router>
    
    </>
  );
}

export default App;
