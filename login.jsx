// LoginPage.js
import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false);
    const [handleyeicon,seteyeicon] = useState('not-show');
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    if(e.target.name === 'password' && e.target.value !== ''){
      seteyeicon('show');
    }
    else{
      seteyeicon('not-show');
    }
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const slideIn = useSpring({
    transform: 'translateX(0%)',
    from: { transform: 'translateX(-80%)' },
    config: config.wobbly,
  } );

  const shake = useSpring({
    transform: error ? 'translateX(5px)' : 'translateX(0)',
    config: config.gentle,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Reset error
    setError('');

    // Implement your login logic here
    console.log('Form submitted:', formData);
    console.log('Remember Me:', rememberMe);
    // You can add API calls or other necessary logic here
  };

  return (
    <div className='loginpage'>
    <animated.div style={fadeIn} className="login-container">
      <animated.div style={slideIn} className="login-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              maxLength={30}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="input-group">
              <input class="input1"
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                maxLength={30}
                required
              />
              
              <FontAwesomeIcon id='eyeicon' class={handleyeicon} onClick={togglePasswordVisibility} icon={showPassword ? faEyeSlash : faEye} />
              
            </div>
          </div>
           

          <div className="form-options">
            <div className='box'>
            <animated.div style={slideIn} className="remember-me">
              <div className='tick'><input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              </div>
              <div className='tick'><label htmlFor="rememberMe">Remember Me</label></div>
            </animated.div>
            </div>
            
            <animated.a  style={slideIn} href="#forgot-password">
            <a className='loginforgot'>
              Forgot Password?
              </a>
            </animated.a>
            
            
          </div>

          {error && (
            <animated.p style={{ ...shake, ...slideIn }} className="error-message">
              {error}
            </animated.p>
          )}

          <animated.div style={slideIn} className="button-container">
            <button className="login-button" type="submit">
              Login
            </button>
            <button className="signup-button" onClick={()=> navigate('/signup')}> Sign Up
              <span className="button-icon fa fa-user-plus"></span>
            </button>
          </animated.div>
        </form>
      </animated.div>
    </animated.div>
    </div>
  );
};

export default LoginPage;