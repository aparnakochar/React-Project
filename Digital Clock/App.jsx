import {React,useState} from 'react';

function App() {
  
let time=new Date().toLocaleTimeString();
const [ctime,setctime]=useState(time);

const updateTime=()=>{
  let time=new Date().toLocaleTimeString();
  setctime(time);
}

setInterval(updateTime,1000);
  return (
    <>
    <div>
      <h1>{ctime}</h1>
     {/* // <button onClick={updateTime}>get time</button> */}
      </div>
      
    </>
  );
};

export default App;
