import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { Component } from 'react';
import{Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import News from './components/pages/News'
import Contacts from './components/pages/Contacts'
import NotFoundPage from './components/pages/NotFoundPage'
import Search from './components/pages/Search'
import Home1 from './components/pages/home/Home'
import Profile from './components/pages/profile/Profile';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Details from './components/pages/Details';


class App extends Component
{
  render(){
    return (
      <div>
        
         <Switch>
         <Route exact path= "/" component={Login}/>
           <Route path= "/home" component={Home}/>
           <Route path= "/register" component={Register}/>
           <Route path= "/news" component={Home1}/>
           <Route path= "/contacts" component={Contacts}/>
           <Route path= "/search" component={Search}/>
           <Route path= "/profile/:username" component={Profile}/>
           <Route path= "/details" component={Details}/>
           <Route component={NotFoundPage}/>
         </Switch>
        
      </div>
    );
  }
}

export default App;
