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

class App extends Component
{
  render(){
    return (
      <div>
         <Navbar/>
         <Switch>
           <Route exact path= "/home" component={Home}/>
           <Route path= "/news" component={Home1}/>
           <Route path= "/contacts" component={Contacts}/>
           <Route path= "/search" component={Search}/>
           <Route component={NotFoundPage}/>
         </Switch>
         <Footer/>
      </div>
    );
  }
}

export default App;
