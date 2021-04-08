import React,{useState} from 'react';
import Sresult from './Sresult';
import './QuickSearch.css';
const QuickSearch=()=>{
    const [img,setImg]=useState('');
    const inputEvent=(event)=>{
        const data=event.target.value;
            console.log(event.target.value);
            setImg(data);
    }
    return (
        <>
       <div className='main_div'>
           <div className='head'>
                <h1>QuickSearch 🔍</h1>
           </div>
           <div className='search-bar'>
            <input type='text' placeholder='search anything' onChange={inputEvent} value={img} />
            {img==="" ?null : <Sresult  name={img}/>}
            
           </div>
       </div>
        </>
    );
 }
export default QuickSearch
