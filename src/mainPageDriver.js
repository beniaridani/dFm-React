import React from 'react';
import { useLocation } from 'react-router-dom';

function MainPageDriver() {
  const location = useLocation();
  //using location function to get the firstName from the login page.(in the login page we push the name to here);
  const firstName = location.state.firstName;

  return (
    <div>
        <div className='welcome-driver'>
        <h1>Welcome {firstName}!</h1>
        <h3>Hope you doing great</h3>
        <p>See if there is any rides for you</p>

        <div className='circle-driver first-ride'><h4>Km:</h4></div>   
        <div className='circle-driver'><h4>Rides:</h4></div>  
        <div className='circle-driver'><h4>Rate:</h4></div>  
          
        </div>
        

        <div className='chat-driver'>
            <h3>New rides will show here</h3>
            <div className='new-ride'>
                {/* <button className='offer-btn' onClick={}>Offer</button> */}
                <button className='offer-btn'>Take</button>
               <p className='ride-details'> From: "Jerusalem"~~To:"Bnei Brak"    </p>
            
             
            
            </div>
            
            
            
            
        </div>
     
      ...
    </div>
  );
}

export default MainPageDriver;
