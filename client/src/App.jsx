import React ,{useState} from 'react';
import './index.css';
import Weather from './Weather';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ToDoList from './ToDoList.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Contact from './Contact.jsx';
import Aboutus from './Aboutus.jsx';
import { NavLink } from 'react-router-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx'


const App = ()  => {
    return(
      <>
      <div className="firediv"><div>
      <img  src="helpinghand" className="scraper" alt="Image will be shown to u early"/></div>
    <div className="firediv2"><h1 className="hh1">Helping Hand</h1></div>
    </div>

   <Navbar/>
   <Route path='/Aboutus'>
     <Aboutus/>
   </Route>
   <Route path='/Login'>
     <Login/>
   </Route>
   <Route path='/Contact'>
     <Contact/>
   </Route>
   <Route path='/Register'>
     <Register/>
   </Route>
  
   <Route path='/index.html'>
     <Home/>
   </Route>
   


  

 </>
  
  );
};
export default App;

