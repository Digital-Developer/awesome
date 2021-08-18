
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';

import Footer from './Footer';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import { Switch , Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar'; 

const App =()=>{
   return(
     <>
 <Navbar  />
<Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/service' component={Service} />
  <Route exact path='/about' component={About} />
  <Route exact path='/contact' component={Contact} />
  <Redirect  to='/' />
</Switch>
<Footer />
     </>

   );
};
export default App;