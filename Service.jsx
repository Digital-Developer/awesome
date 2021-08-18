
import React from 'react';
import one from  '../src/images/img1.jpg';
import two from  '../src/images/img2.jpg';
import three from  '../src/images/app.jpg';
import four from  '../src/images/img3.png';
import five from  '../src/images/mern.jpg';
import six from  '../src/images/mean.jpg';

import Card from './Card';
const Service =()=>{
     return(
       <>
      <div className="container" >
           <div className="  row">   <h1 className='text-center'> Our Services </h1>
      </div>
      <div className="row my-3 g-4">
          <Card 
            imgsrc={one}
            cardtitle='Web Designing'
            cardtext='Html, Css, Bootstrap, Javascipt and Jquery'
          />
          <Card 
            imgsrc={two }
            cardtitle='Web Development'
            cardtext='Html, Css, Bootstrap, Javascipt and Jquery'
          />
          <Card 
            imgsrc={three }
            cardtitle='App Development'
            cardtext='Html, Css, Bootstrap, Javascipt and Jquery'
          />
          <Card 
            imgsrc={four }
            cardtitle='Andiod Development'
            cardtext='Html, Css, Bootstrap, Javascipt and Jquery'
          />
          <Card 
            imgsrc={five}
            cardtitle='Mern Stack'
            cardtext='Html, Css, Bootstrap, Javascipt and Jquery'
          />
          <Card 
            imgsrc={six}
            cardtitle='Mean stack '
            cardtext='Html, Css, Bootstrap, Javascipt and Jquery'
          />
      </div>
      </div>
            </>
   );
};
export default Service;