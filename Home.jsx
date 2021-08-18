
import React from 'react';
import Common from './Common';
import web from '../src/images/home.jpg';
const Home =()=>{
     return(
       <>
      <Common
      name='Start Learning With'
      btn='Get Started'
      visit='/service'
       img={web}
       />
            </>
   );
};
export default Home;