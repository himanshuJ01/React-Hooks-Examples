import React, { useState } from 'react';
import './App.css';



const App =() => {
   const [count,setCount] = useState(() => 0);
   return(
      <>
       <button onClick={() => setCount(x => x+1)} class="btn waves-effect waves-li ">++ </button>
        <button onClick={() => setCount(0)} class="btn waves-effect waves-li "> reset </button>
         <button onClick={() => setCount(x => x-1)} class="btn waves-effect waves-li "> -- </button>
         <br></br>
         <br></br>
         <h1>{count}</h1>
      </>


   )
}


export default App;
