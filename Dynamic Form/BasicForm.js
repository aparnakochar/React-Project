import React, { useState } from 'react';
import './BasicForm.css';
const BasicForm=()=>{
    const [fullName,setFullName]=useState({
        fName:" ",
        lName:" ",
        email:" ",
        number:" ",
    });
    const inputChange=(event)=>{
        
        let value=event.target.value;
        let name=event.target.name;

        setFullName((prevValue)=>{
            
            if(name==='fName'){
                return{
                fName:value,
                lName:prevValue.lName,
                email:prevValue.email,
                number:prevValue.number
                };
            }

            else if(name=='lName'){
                return{
                fName:prevValue.fName,
                lName:value,
            };
        }
        else if(name==='email'){
            return{
                fName:prevValue.fName,
            
                lName:prevValue.lName,
                email:value,
                number:prevValue.number
                };
        }
        else if(name==='number'){
            return{
                fName:prevValue.fName,
            
                lName:prevValue.lName,
                email:prevValue.email,
                number:value,
                };
        }
        })
    }
    const submit=(event)=>{
        event.preventDefault();
      
    }
    return(
        <>
        
        <form onSubmit={submit}>
        <div>
        <h1>hello {fullName.fName} {fullName.lName}</h1>
        <p>{fullName.email}</p><br/>
        <p>{fullName.number}</p>
        <input type="text" placeholder="enter first name" onChange={inputChange} name="fName"  />
        <br />
        <input type="text" placeholder="enter last name" onChange={inputChange} name="lName"  />
         <br />
        <input type="email" placeholder="enter your email" onChange={inputChange} name="email"  />
        <br />
        <input type="number" placeholder="enter your number" onChange={inputChange} name="number"  />
        <button type="submit">click me</button>
        </div>
        </form>
        
        </>

    );
}

export default BasicForm;
