
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';
import React, { useState } from 'react';


function ncard(val){
  return(
<Card 
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.links}
/>
  );
}
ReactDOM.render(
  <>

  <h1 className="heading_style">List of Top 5 Netflix Series in 2021</h1>

{Sdata.map(ncard)}
</>,
  document.getElementById('root')
);
