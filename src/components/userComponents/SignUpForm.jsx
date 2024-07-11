import React, { useState } from 'react';
import './SignUpForm.css';
import logo from '../../assets/group-assembly.png';

function SignUpForm () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  
    let errors = {};
  
    if (!firstName) errors.firstName = true;
    if (!lastName) errors.lastName = true;
    if (!email) errors.email = true;
    if (!password) errors.password = true;
    if (!confirmPassword) errors.confirmPassword = true;
    if (!location) errors.location = true;
    if (password !== confirmPassword) errors.confirmPassword = true;
    if (!agree) errors.agree = true;
  
    setErrors(errors);
  
    if (Object.keys(errors).length > 0) return;
  
    setSubmitted(true);
    // rest of submit logic
  };

  function camelCaseToSentenceCase(text) {
    let result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  
  const createInputField = (id, value, setValue, type = 'text') => (
    <div style={{ position: 'relative' }}>
      <label htmlFor={id} className="form-label">
        {camelCaseToSentenceCase(id)}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`form-input ${errors[id] ? 'input-error' : ''}`}
      />
    </div>
  );

  return (
    <div className="signup-form">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {createInputField('firstName', firstName, setFirstName)}
          {createInputField('lastName', lastName, setLastName)}
        </div>

        {createInputField('email', email, setEmail, 'email')}

        <div className="row">
          {createInputField('password', password, setPassword, 'password')}
          {createInputField('confirmPassword', confirmPassword, setConfirmPassword, 'password')}
        </div>

        <label htmlFor="location" className="form-label">Location</label>
        <select id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Select a country</option>
          {/* hard-code countries? */}
        </select>

        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input 
              className={`large-checkbox ${errors.agree ? 'input-error' : ''}`} 
              type="checkbox" 
              id="agree" 
              value={agree} 
              onChange={(e) => setAgree(e.target.checked)} 
              style={{ margin: 0, padding: 0, alignSelf: 'center', height: '30px' }} 
            />
            <label className="no-asterisk" htmlFor="agree" style={{ marginLeft: '10px', whiteSpace: 'nowrap', alignSelf: 'center', lineHeight: '30px' }}>
              I have read and acknowledge Group Assembly’s&nbsp;
              <a href="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
            </label>
          </div>
        </div>

        <p style={{ textAlign: 'justify' }}>
          By providing us with your email, you agree to Group Assembly’s&nbsp;
          <a href="/terms-of-service" style={{ textDecoration: "underline" }}>Terms of Service</a>&nbsp;
          and to receive email updates on courses, special events and GA news. You can change your mind at any time and unsubscribe from GA marketing emails by clicking the “unsubscribe” link located at the bottom of every marketing email or by emailing no.marketing@group-assembly.com
        </p>

        <p>Already have an account? <a href="/signin" style={{ color: 'blue'}}>Sign in</a>.</p>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;