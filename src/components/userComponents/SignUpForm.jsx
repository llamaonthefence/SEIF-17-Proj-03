import { useState } from 'react'
import './SignUpForm.css';
import logo from '../../assets/group-assembly.png';
import { hashData } from '../../util/security'
import {signUp } from '../../service/users';

function SignUpForm() {
  const [formState, setFormState] = useState({});
  const [disable, setDisable] = useState(true);
  const [errorState, setErrorState] = useState({});

  function handleChange(evt) {
    var currForm = formState;
    currForm[evt.target.name] = evt.target.value;
    setDisable(checkPassword());
    setFormState(currForm);

    // fields validation
    setErrorState({
      ...errorState,
      [evt.target.name]: evt.target.value === ''
    });
  };

  // make sure check and password is the same
  function checkPassword() {
    // password validation
    // must have at least 1 uppercase, 1 lowercase, 1 special
    var currForm = formState;
    if (!currForm.password) {
        return true
    } 
    if (!currForm.confirm) {
        return true
    }
    if (currForm.password !== currForm.confirm) {
        console.log(currForm.password)
        console.log(currForm.confirm)
        return true
    }
    return false
  }

  function hashPassword() {
    var currForm = formState;
    if (currForm.password) {
        // console.log(currForm.password)
        var hash = hashData(currForm.password);
        currForm.password = hash.hash;
        currForm.salt = hash.salt;
        currForm.iterations = hash.iterations;
    }  
  }
  
  async function handleSubmit(evt) {
    try { 
        evt.preventDefault();
        // We don't want to send the 'error' or 'confirm' property,
        //  so let's make a copy of the state object, then delete them
        // highlight-start
        hashPassword();
        const formData = {...formState};
        delete formData.error;
        delete formData.confirm;
        // highlight-end
        // console.log(formData)
        const user = await signUp(formData);
        // Baby step!
        console.log(user)
      
      } catch(e) {
        console.log(e);
      }
  }

  return (
    <div className="signup-form">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" id="firstName" name="firstName" className={`input ${errorState.firstName ? 'input-error' : ''}`} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" id="lastName" name="lastName" className={`input ${errorState.lastName ? 'input-error' : ''}`} onChange={handleChange} />
          </div>
        </div>

        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" name="email" className={`input ${errorState.email ? 'input-error' : ''}`} onChange={handleChange} />

        <div className="row">
          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" name="password" className={`input ${errorState.password ? 'input-error' : ''}`} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="confirm" className="form-label">Confirm Password</label>
            <input type="password" id="confirm" name="confirm" className={`input ${errorState.confirm ? 'input-error' : ''}`} onChange={handleChange} />
          </div>
        </div>

        <label htmlFor="location" className="form-label">Location</label>
        <select id="location" value={location} onChange={handleChange}>
          <option value="">Select a country</option>
          {/* hard-code countries? */}
        </select>
  
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input 
              className={`large-checkbox`} 
              type="checkbox" 
              id="agree" 
              onChange={handleChange} 
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
  
        <button type="submit" disabled={disable}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;