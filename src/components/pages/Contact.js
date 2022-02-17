import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css'

export default function Contact() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }
    if (!message) {
      setErrorMessage('Please leave a message');
      return;
    }
    alert(`Thanks for reaching out, ${name}`);

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-sm-12 p-0">
          <div className="contact-card mx-3 my-5">
            <div className="card-body p-3">
              <h2 className="text-center text-white">Contact Me</h2>
              <form className="form text-center">
                <div className="form-group">
                  <input
                    className="form-control my-3"
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control my-3"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    required
                    
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control my-3"
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter message"
                    rows="4"
                    required
                  />
                </div>
                <button className="btn button" type="submit" onClick={handleFormSubmit}>Submit</button>
              </form>
            </div>
            {errorMessage && (
              <div>
                <p className="error-text text-center text-white pb-3">{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
