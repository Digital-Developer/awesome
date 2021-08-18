
import React from 'react';
import Common from './Common';
import pic from '../src/images/home.jpg';
const About =()=>{
     return(
       <>
<Common 
 name='Welcome To About Page'
 btn='Contact Now'
 visit='/contact'
  img={pic}
 />
            </>
   );
};
export default About;