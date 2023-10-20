import React from 'react';

export default function Footer() {
  return (
    
    <footer className="bg-dark text-light text-center py-4">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>

      <div className="container">
        <h5>Connect with me:</h5>
        <div className="row">
          <div className="col">
            <a href="https://www.linkedin.com/in/rishabh-katiyar-30b136252/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin h3"></i>
            </a>
            <p>LinkedIn</p>
          </div>
          <div className="col">
            <a href="https://www.instagram.com/iamkiiido/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram h3"></i>
            </a>
            <p>Instagram</p>
          </div>
          <div className="col">
            <a href="https://github.com/Pheonixrog" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github h3"></i>
            </a>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
