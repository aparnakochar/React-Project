import {React,useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
const App=()=>{
  const [plus,setPlus]=useState(0);
  const incre=()=>{
    let ans=plus+1;
    setPlus(ans);
  }
  const decre=()=>{
    if(plus<=0)
    alert("You cannot decrement the value beyond 0");
    else{
      let ans=plus-1;
      setPlus(ans);
    }
  }
  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{plus}</h1>
          <div className='btn_div'>
          <Tooltip title="Add" aria-label="add">
            <Button onClick={incre} className='btn_green'>Increment</Button>
            </Tooltip>
            <Tooltip title="Delete">
            <Button onClick={decre} className='btn_red'>Decrement</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
