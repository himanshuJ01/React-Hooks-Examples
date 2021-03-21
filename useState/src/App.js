import React, { useState } from 'react';
import {TextField , Icon, Button} from '@material-ui/core';


const App = () => {
   const [user, setUser] = useState({ name: '', email: ''});
   const [submitted, setSubmitted] = useState(false);
   const [message, setMessage] = useState('');
   const handleSubmit = (e) => {
       if(user.name && user.mail){
          setSubmitted(true);
       }
       setMessage('please enter values');
       return;

   }

   return(
      <form  noValidate autoComplete="off">
  <TextField id="standard-basic" label="Name" value={user.name} onChange={(e) => setUser({ ...user,name:e.target.value})} /><br></br>
  <TextField id="standard-basic" label="Email" value={user.email} onChange={(e) => setUser({...user, email:e.target.value})} /><br></br><br></br>
   <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={handleSubmit}
      >
        Submit
      </Button><br></br><br></br>
      {user.name}<br></br>
   
      {user.email}<br></br>
      {message}
  
</form>
     
    
   );
   }



export default App;
