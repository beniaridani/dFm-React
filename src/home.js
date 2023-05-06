import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialCarousel from './TestimonialCarousel';



function Home() {
  return (
    <div>
   <header className="first-header">
  <div className="f-header-content">
    <h1 className="headerTitle">Welcome to dFm </h1>
    <h3><span className="red-letter">D</span>rive For Money</h3>
    <p className="p-header">Here you can earn money or use our services</p>

    {/* login buttons */}
    <div className="loginButtons">
      <Link to="/Login"><button type="button" className="Inbutton" name="button">Login</button></Link>
      <Link to="/SignUp"><button type="button" className="Upbutton " name="button">Sign Up</button></Link>
    </div>
  </div>
</header>

<section className="white-section" id="ourservices">
  <h1 className="section-heading">Our Services</h1>
  <div className="container-fluid">
    <div className="row">
      <div className="service-box col-lg-4">
        <i className="icon fas fa-check-circle fa-4x"></i>
        <h3 className="service-title">Travels</h3>
        <p>Our drivers will take you from place to place at an affordable price suitable for every budget.</p>
      </div>
      <div className="service-box col-lg-4">
        <i className="icon fas fa-check-circle fa-4x"></i>
        <h3 className="service-title">Shipments</h3>
        <p>Our drivers also offer a service of deliveries from place to place with high availability and at any hour.</p>
      </div>
      <div className="service-box col-lg-4">
        <i className="icon fas fa-check-circle fa-4x"></i>
        <h3 className="service-title">Availability</h3>
        <p>Our site is at your service twenty-four hours a day with a wide audience of drivers who will be happy to help you at any hour.</p>
      </div>
    </div>
  </div>
</section>

<hr/>
<section className="colored-section" id="testimonials">
  <TestimonialCarousel/>

  <hr />

  <section className="white-section" id="contact">
    <h2 className="section-heading ">Contact and About us</h2>

    <div className="container-fluid">
      <div className="row">

        <div className="contact-box col-lg-6">
          <h2 className="contact-title">Contact us <i className="fas fa-address-book"></i></h2>
          <p>Hi and thank you  for using DFm! For any suggestion, comment and question we are at your service at our email address.
            Please click on the button below and write to us and we will be happy to be at your service at any time of the day.<br/> <em> Keep in touch! </em></p>

          <a className="btn" href="mailto:info@ari.w.05122@gmail.com">Send Email</a>
        </div>

        <div className="about-box col-lg-6">
          <h2 className="about-title">About us <i className="fas fa-address-card "></i></h2>
          <p>The developers of this website are third year students in the computer science degree at Ashkelon Gan Yavne College.
            The site was built by <em>Daniel Orlik</em>, <em>Benyaho Tamsut</em> and <em>Ari Weisner</em>.</p>
        </div>

      </div>
    </div>
  </section>
</section>

   
    </div>
  );
}

export default Home;