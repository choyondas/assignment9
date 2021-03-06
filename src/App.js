import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';
import Buy from './components/Buy/Buy';
function App() {
  return (
    <div  >
      {/* Router */}
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/about" >
            <About></About>
          </Route>
          <Route path="/contact" >
            <Contact></Contact>
          </Route>
          <Route path="/service" >
            <Service></Service>
          </Route>
          <Route path="/details" >
            <Details></Details>
          </Route>
          <Route path="/buy" >
            <Buy></Buy>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
        <br />
        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
