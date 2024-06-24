import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [values, setValues] = useState({
        phoneNumber: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = async (event) => {
        event.preventDefault();
        const postdata = await axios.post('http://localhost:5000/login', values)
        console.log("postdata", postdata)
        if (postdata.data.Status === "Success") {
            navigate('/todo')
        }

    }

        return (
            <div className='d-flex justify-content-center align-items-center bg-white vh-100'>
                <div className='bg-white p-3 rounded w-25 border'>
                    <h2 className='text-center' >Sign-In</h2>
                    <form onSubmit={handleSubmit}>
    
                        <div className='mb-3'>
                            <label htmlFor='Email/Mobile'><strong>Email/Mobile</strong></label>
                            <input type="email" placeholder='Email/Mobile' name='Email/Mobile' onChange={e => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
                        </div>
    
                        <div className='mb-3'>
                            <label htmlFor='password'><strong>Password</strong></label>
                            <input type="password" placeholder='Enter password' name='password' onChange={e => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' />
                        </div>
                        <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
    
    
                        <p>Not a member?<Link to='/' className="text-decoration-none">SignUp</Link></p>
    
    
                    </form>
                </div>
            </div>
        )
    }
    
    export default Login


