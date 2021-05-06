import React from 'react'

const FormSignup = () => {
    return (
   <div className='form-content-right'>
       <form className='form'>
           <h1>Get started with us today! Create your account by filling out your information below</h1>
       </form>
       <div className='form-inputs'>
           <label htmlFor='username' 
           className='form-label'>
            Username
            </label>
            <input 
            type='text' 
            id='username'
            name='username'
            className='form-input'
            placeholder='Enter your username'
            />
       </div>
        <div className='form-inputs'>
           <label htmlFor='password'
           className='form-label'>
            password
            </label>
            <input 
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
            />
       </div>
        <div className='form-inputs'>
           <label htmlFor='email'
           className='form-label'>
            Email
            </label>
            <input 
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your email'
            />
       </div>
   </div>
    )
}

export default FormSignup
