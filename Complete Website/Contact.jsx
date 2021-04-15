import React,{useState} from 'react';

const Contact=()=>{

  const [data,setData]=useState({
    fullName:'',
    phone:' ',
    email:' ',
    msg: ' '
  })
  const inputEvent=(event)=>{
    const {name,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
            };
    });

  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(
      `my name is ${data.name}. My number is ${data.number}. My email is ${data.email}. Here is what i want to say ${data.msg}`
    )
  }
  return(
    <>
    <div className="my-5 ">
      <h1 className='text-center'> Contact Us</h1>
    </div>
    <div className='container contact_div '>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>


          <form onSubmit={formSubmit}>
          <div class="form-group pb-3">
    <label for="exampleInputEmail1">Full name</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  name='fullName' value={data.fullName} onChange={inputEvent}
    placeholder="Enter your name" />
  </div>
  <div class="form-group pb-3">
    <label for="exampleInputEmail1">Phone</label>
    <input type="number" class="form-control" id="exampleInputEmail1"  name='phone' value={data.phone} onChange={inputEvent}
    placeholder="Enter mobile number" />
  </div>
  <div class="form-group pb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  name='email' value={data.email} onChange={inputEvent}
    placeholder="Enter email" />
  </div>
  <div class="form-group pb-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' value={data.msg} onChange={inputEvent}></textarea>
  </div>
  <button type="submit" className='btn-color'>Submit</button>
</form>
          
        </div>
      </div>
    </div>
    </>
  );
}
export default Contact;
