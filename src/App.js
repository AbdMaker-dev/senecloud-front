import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import ListUser from './components/users/listUser';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 

function App() {
  return (
    <Router> 
           <div className="App container"> 
            <Switch> 
              <Route exact path='/' component={Login}></Route> 
              <Route exact path='/hom' component={ListUser}></Route> 
            </Switch> 
          </div> 
    </Router> 
  );
}

export default App;
