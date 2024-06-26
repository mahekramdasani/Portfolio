// Install Axios for making HTTP requests: npm install axios

import React, { useState } from 'react';
import axios from 'axios';
import {Row,Col} from 'react-bootstrap'
import { socialLinks } from '../components/data';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className='contact' style={{ display: 'flex', width: '100%' }}>
      <Col style={{ width: '75%' }}>
        <h2 className='text-center' style={{ color: '#00E5E5' }}>Contact Form</h2>
        <form action= "https://formsubmit.co/mahekramdasani@gmail.com" className='contactForm' method='post'>
          <div>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          </div>
          <div>
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
          </div>
          <div className='centered-button'>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </Col>
      <Col style={{ width: '25%', color: '#00E5E5' }}>
        <p>Phone<br /><span style={{ color: 'white' }}>+91 98795 08137</span></p>
        <p>Email<br /><span style={{ color: 'white' }}>mahekramdasani@gmail.com</span></p>
        <p>Address<br /><span style={{ color: 'white' }}>Ahmedabad,Gujarat,India</span></p>
        <p>Socials<br />
          {socialLinks.map((socialLink, index) => (
            <a key={index} href={socialLink.link} target='_blank' style={{ color: 'white', marginRight: '10px' }}>{socialLink.icon}</a>
          ))}
        </p>
      </Col>
    </div>
      

  );
};

export default Contact;
