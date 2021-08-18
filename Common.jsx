
import React from 'react';
import { NavLink } from 'react-router-dom';


const Common =(props)=>{
     return(
       <>
       <div className='container'>
            <div className='row d-flex align-items-center py-5'>
<div className='col-sm-6  text-start order-2 order-lg-1'>
<h1 className=' header_one'>
    {props.name} <br />
     <strong className="brand_name">
            Digital Developers</strong>
</h1>
<h2 className='mx-2 header_second'> We Are Talented Developers Making Websites </h2>
<div className='mt-2'>
     <NavLink 
     to={props.visit}
     className='py-2 px-3  btn-get-started'>
          {props.btn}
     </NavLink>
</div>
</div>
<div className='col-sm-6 order-1  order-lg-2'>
     <img src={props.img}  alt='img' className='img-fluid animated_img' />
     </div>
            </div>
       </div>
            </>
   );
};
export default Common;