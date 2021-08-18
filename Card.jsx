
import React from 'react';
import { NavLink } from 'react-router-dom';
const Card =(props)=>{
     return(
       <>
      <div className='col-sm-4 col-10 mx-auto'> 
      <div class="card">
  <img src={props.imgsrc} class="card-img-top img-fluid" alt="..." />
  <div class="card-body text-center">
    <h4 class="card-title fw-bold">{props.cardtitle}</h4>
    <p class="card-text ">
         <strong >Technologies Used  </strong> <br />
     {props.cardtext}
    </p>
    <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
      </div>
            </>
   );
};
export default Card;