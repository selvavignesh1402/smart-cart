import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import './Footer.css'; // Import your CSS file for styling

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <footer>
          <div className="footer-column">
            <p>
              COMPANY
              <br />
              About us
              <br />
              Careers
              <br />
              Partner With Us
            </p>
          </div>
          <div className="footer-column">
            <p>
              CONTACT
              <br />
              Help & Support
              <br />
              Contact Us
            </p>
          </div>
          <div className="footer-column">
            <p>
              LEGAL
              <br />
              Terms & Conditions
              <br />
              Refund & Cancellation
              <br />
              Privacy Policy
              <br />
              Shipping Policy
            </p>
          </div>
          <div class="footer-column">
            <List>
              <ListItem button onClick={() => window.open('https://www.instagram.com/', '_blank')}>
                <ListItemIcon>
                  <InstagramIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Instagram" />
              </ListItem>

              <ListItem button onClick={() => window.open('https://www.facebook.com/', '_blank')}>
                <ListItemIcon>
                  <FacebookIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Facebook" />
              </ListItem>

              <ListItem button onClick={() => window.open('https://twitter.com/', '_blank')}>
                <ListItemIcon>
                  <TwitterIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Twitter" />
              </ListItem>
            </List>
          </div>
        </footer>
        <hr className="line"></hr>
        <p>© 2023 SMART CART LLP</p>
      </div>
    </div>
  );
}
