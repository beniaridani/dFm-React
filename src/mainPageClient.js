import React from 'react';
import {useLocation} from "react-router-dom";


 function MainPageClient() {
    // using locetion function to get the firstName from the login page
   const location = useLocation();   
   const firstName = location.state.firstName;
   return (
    <div>
      <div className="welcome-passenger">
        <h1>Welcome {firstName}!</h1>
        <h3>Hope you doing well</h3>
        <p> How can we help you today?</p>
      </div>  
    </div>
  );
}

export default MainPageClient;