import React, { useState } from 'react';
import {TextField , Icon, Button} from '@material-ui/core';


const App = () => {
   const [data, setData] = useState([]);
   const [value, setValue] = useState('');
   
   const updateData = () => {
     setData(data => [...data, {
        id: '1',
        value
     }]);
       
   }

   return(
      <form  noValidate autoComplete="off">
  <TextField id="standard-basic" label="Name" value={value} onChange={(e) => setValue( e.target.value)} /><br></br> <br></br> <br></br>
  <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={updateData}
      >
        Update
      </Button><br></br><br></br>
      {data.map((i,index) => {
         return <li key={index}>{i.id}</li>
      })}
  
</form>
     
    
   );
   }



export default App;
