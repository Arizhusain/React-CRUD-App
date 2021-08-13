import './App.css';
import Navbar from "../src/Components/Navbar"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/Viewuser';


function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/Contact' component={Contact}/>
          <Route exact path='/users/add' component={AddUser}/>
          <Route exact path='/users/edit/:id' component={EditUser}/>
          <Route exact path='/users/view/:id' component={ViewUser}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
