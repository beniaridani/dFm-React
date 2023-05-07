import React from 'react';
import { useLocation } from 'react-router-dom';
import NewRide from './newRide';

function MainPageDriver() {
  const location = useLocation();
  //using location function to get the firstName from the login page.(in the login page we push the name to here);
  const firstName = location.state.firstName;

  

  return (
    <div>
        <div className='welcome-driver'>
        <h1>Welcome {firstName}!</h1>
        <h3>Hope you doing great</h3>
        <p>Look if there is any rides for you.. </p>

        <div className='driverAchivement'><p>Achivment</p></div>
        <div className='circle-driver first-ride'><h4>Km:</h4></div>   
        <div className='circle-driver'><h4>Rides:</h4></div>  
        <div className='circle-driver'><h4>Rate:</h4></div>  
          
        </div>
           
            
             <div className='chat-driver' id='chat-driver'>
             {/* <h2 className='chat-title'>New Rides</h2> */}
                <div className='chat-driver-content'>
                      <div className='chat-driver-content-inner'>
                        <NewRide />
                        <NewRide />
                        <NewRide />
                        <NewRide />
                        <NewRide />
                
                      </div>
                </div>
           </div>


    </div>
  );
}

export default MainPageDriver;
