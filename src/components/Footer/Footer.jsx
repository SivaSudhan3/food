import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h1>Dear Foody</h1>
        <p>Best Pizzas in town, try it out! and <p>Your Taste Our Service</p> </p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Tueday-Sunday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Monday</span>
            <p>Off day</p>
          </div>
        </ListGroup>
      </div>
            
                <div>
                    <h1>Others</h1>
                    <a href="/">Contact Us</a> <br/>
                    <a href="/">Terms of Service</a><br/>
                    <a href="/">Privacy Policy</a><br/>
                    <a href="/">License</a>
                </div>
            
            
      
    </footer>
    </div>
  );
};

export default Footer;