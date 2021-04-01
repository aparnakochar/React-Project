import React from 'react';
import './App.css';
function App(){
    var h=new Date().getHours(); 
let ans='';
const stylingCSS={}
if(h>=1 && h<=11){
  ans="Good Morning";
  stylingCSS.color="yellow";
}
else if(h>=12 && h<=19){
ans="Good Afternoon";
stylingCSS.color="pink";
}
else{
ans="Good Night";
stylingCSS.color="black";
}
    return(
        <>
        <div>
        <h1> Hello sir,<span style={stylingCSS}>{ans}</span> </h1>
        </div>
        </>
    );
}
export default App;
