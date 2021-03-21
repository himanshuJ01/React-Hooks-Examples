import React, { useState, useEffect } from 'react';



const App = () => {
   const [fullName, setFullName] = useState({name : 'name' , familyName: ''});
   
   
  useEffect(() => {
     setFullName({ name: 'anything' , familyName: 'anything'});
    
  }, []);

   return(
      <div>
      <h1>Name: {fullName.name}</h1>
      <h1>Family Name: {fullName.familyName}</h1>   
     </div>
     
    
   );
   

   }

export default App;
