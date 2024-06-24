import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [values, setValues] = useState({
    fullName: '',
    fatherName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', values);
      if (response.data.Status === 'Success') {
        navigate('/login');
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-white vh-100 '>
      <div className='bg-white p-3 rounded w-25 border'>
        <h2 className='text-center'>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Full Name</strong></label>
            <input
              type="text"
              placeholder='Enter Name'
              name='fullName'
              value={values.fullName}
              onChange={handleChange}
              className='form-control rounded-0'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='email'><strong>Father Name</strong></label>
            <input
              type="text"
              placeholder='Enter fatherName'
              name='fatherName'
              value={values.fatherName}
              onChange={handleChange}
              className='form-control rounded-0'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='password'><strong>Email</strong></label>
            <input
              type="email"
              placeholder='Enter Email'
              name='email'
              value={values.email}
              onChange={handleChange}
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Phone Number</strong></label>
            <input
              type="number"
              placeholder='Enter phoneNumber'
              name='phoneNumber'
              value={values.phoneNumber}
              onChange={handleChange}
              className='form-control rounded-0'
            />
          </div>
       
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type="Password"
              placeholder='Enter password'
              name='password'
              value={values.password}
              onChange={handleChange}
              className='form-control rounded-0'
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
          <p>Already a member?<Link to='/login' className='decoration-none'>Login</Link></p>
         
        </form>
      </div>
    </div>
  );
};

export default Register;

