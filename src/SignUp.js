import React from 'react';
import { Link } from 'react-router-dom';


function SignUp() {
  return (
    <div className='sign'>
        <section className="SignUp">
          <h2 className='signUpHeading'>SignUp</h2>
      <Link to="/dregister">
        <button className="driver">
          <h1>Driver</h1>

        </button>
      </Link>
      <Link to="./cregister">
        <button className="passenger">
          <h1>Passenger</h1>
          
        </button>
      </Link>
    </section>
    </div>
  );
}

export default SignUp;
