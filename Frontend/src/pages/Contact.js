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
    <div className='contact'>
      <Col>
        <h2 className='text-center'>Contact Form</h2>
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
        <p className='formsubmit'>*This form is submitted through formsubmit.</p>
      </Col>
      <Col>
        <p>Phone<br /><span>+91 98795 08137</span></p>
        <p>Email<br /><span>mahekramdasani@gmail.com</span></p>
        <p>Address<br /><span>Ahmedabad,Gujarat,India</span></p>
        <p>Socials<br />
          {socialLinks.map((socialLink, index) => (
            <a key={index} href={socialLink.link} target='_blank' className='icon'>{socialLink.icon}</a>
          ))}
        </p>
      </Col>
    </div>
      

  );
};

export default Contact;
