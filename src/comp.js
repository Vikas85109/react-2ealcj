import React, { useState, useEffect } from 'react';
export default function Comp() {
  const [count, setCount] = useState(0);

  // v1
  useEffect(() => {
    console.log('render');
  });
  // v2
  useEffect(() => {
    console.log('runs when the depandency first render');
  }, []);

  // v3
  useEffect(() => {
    console.log('runs when the depandency array state changes');
  },[count]);
// v4
return(
  <div>
    <button onClick = {()=>setCount(count-1)}>-</button>
    {count}
    <button onClick = {()=>setCount(count+1)}>+</button>
  </div>
);


}

import React,({useState}) from 'react';
