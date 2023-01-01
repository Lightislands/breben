import React from 'react';

const Footer = () => (
  <footer className="footer-wrap">
      <div className="footer">
        <div className="contacts">
          <div className="phone-email">
            <h3>Contacts</h3>
            <p>
              Phone: <a href="tel:+16509899787">+1 650 989 9787</a>
              <br/>
              Email: <a href="info@itoutstaff.com">info@itoutstaff.com</a>
            </p>
          </div>
        </div>
        <p>© {new Date().getFullYear()} All rights reserved</p>
      </div>
  </footer>
);

export default Footer;
