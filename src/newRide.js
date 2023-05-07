import React from 'react'

 function NewRide() {
    var today = new Date();
    const hours = today.getHours();
    const minute = today.getMinutes();
    
  return (
    <div>
          {/* <h3 className='newRide-header'>New rides will show here</h3> */}
            <div className='new-ride'>
                {/* <button className='offer-btn' >Offer</button> */}
                <button className='offer-btn' >Take</button>
               <p className='ride-details'> From: "Jerusalem"~~To:"Bnei Brak" <span className='newRide-clock'>{hours}:{minute}</span> </p>
              
            </div> 

    </div>
  )
}

export default NewRide;
