import logo from './images/logo.svg';
import buttonIcon from './images/icon-arrow.svg';
import heroImg from './images/hero-desktop.jpg';
import errorImg from './images/icon-error.svg';
import './App.css';
import React, { useState, useEffect } from "react";



function App() {

  const initialValue = {email: "", };
  const [formValue, setformValue] = useState(initialValue);
  const [formError, setformError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformError(validate(formValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formError]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    else if (regex.test(values.email)) {
      errors.email = "Your Email has been saved Successfully,";
    }
    return errors;
  };


  return (
    <div className="container">
      <div className='left-side'>
        <div className='left'>
          <img src={logo} className='logo' alt="logo" />
          <div className='headline-content'>
            <h2 className='heading'><span className='headline-link'>WE'RE</span> <br /> COMING <br /> SOON</h2>
            <p className='headline-paragraph'> Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcemments and our launch deals</p>
          </div>
          <div> 
            <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name="email"
            value={formValue.email}
            onChange={handleChange}
            placeholder='Email Address'
            className='input'
          />
          <button type='submit' className='button'> <img src={buttonIcon}  alt="" /> </button>
          <p className='message'>{formError.email}</p>
          </form>
          </div>
        </div>
      </div>
      <div className='right-side'>
        <img src={heroImg} className='hero-img' alt="" />
      </div>
    </div>
  );
}

export default App;
