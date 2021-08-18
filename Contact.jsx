
import React from 'react';
import { useState } from 'react';
const Contact =()=>{

const [data,setdata]=useState(
     {
          fullname:'', email:'', number:'', message:''
     }
);  

const inputevent =(event)=>{
   const {name,value } = event.target;
   setdata({...data,[name]:value});
}; 


 const formsubmit= async(e)=>{
      e.preventDefault();

      const  {fullname,email,number,message}= data;
 if (fullname && email && number && message) 
 {
     const  get = await fetch("https://awesomeapp-6c8e1-default-rtdb.firebaseio.com/awesomeapp.json" ,
     {
          method:"POST",
          headers:{
       "Content-Type":"application",
          },
          body:JSON.stringify(
             {  fullname, email, number,  message, }
          ),}
     );
     if (get)
     {  setdata(
               { fullname:'', email:'', number:'', message:''   } );
          alert('Data Saved Successfully 👍 ');
     }
 } else {
      alert('please fill the data');
 }
 
     
 };

     return(
       <>
  <div className="container" >
           <div className="row my-3 ">
               <h1 className=' text-center'> Contact Us </h1>  </div>
          <div className='row '>
           <div className='col-sm-6 col-10 mx-auto'>
<form onSubmit={formsubmit} method='POST'>
<div className="mb-3">
  <label 
  for="exampleFormControlInput1"
   className="form-label"
   >
        Full Name
        </label>
  <input 
  name='fullname'
  value={data.fullname}
  onChange={inputevent}
  type="text"
   className="form-control"
    id="exampleFormControlInput1"
     placeholder="Enter Your Name"
      />
</div>
<div className="mb-2">
  <label 
  for="exampleFormControlInput1"
   className="form-label"
   >
   Email
        </label>
  <input
    name='email'
    value={data.email}
  type="email"
  onChange={inputevent}
   className="form-control"
    id="exampleFormControlInput1"
     placeholder="Enter Your Email"
      />
</div>
<div className="mb-2">
  <label 
  for="exampleFormControlInput1"
   className="form-label"
   >
Phone Number
        </label>
  <input 
    name='number'
    value={data.number}
  type="number"
  onChange={inputevent}
   className="form-control"
    id="exampleFormControlInput1"
    placeholder ="Enter Your Phone Number"
      />
</div>
<div
 className="mb-2">
  <label
   for="exampleFormControlTextarea1" 
   className="form-label">
        Message
        </label>
  <textarea 
  name='message'
  value={data.message}
  onChange={inputevent}
  className="form-control
  " id="exampleFormControlTextarea1"
   rows="3">

   </textarea>
</div>
<div className='mt-4 text-center'>
    <button className="btn btn-outline-dark px-5" type="submit">Submit</button>
  </div>
</form>
           </div>
          </div>




















      </div>
     
            </>
   );
};
export default Contact;