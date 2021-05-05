import React from 'react'

const FormSignup = () => {
    return (
   <div className="form-content-right">
       <form className="form">
           <h1>Get started with us today! Create your account by filling out your information below</h1>
       </form>
       <div className="form-inputs">
           <label htmlFor="username" 
           className="form-label">
            Username
            </label>
            <input type="text" 
            name='username'
            className="form-input"
            placeholder='Enter your username'
            />
       </div>
        <div className="form-inputs">
           <label htmlFor="email" 
           className="form-label">
            Email
            </label>
            <input type="text" 
            name='email'
            className="form-input"
            placeholder='Enter your email'
            />
       </div>
   </div>
    )
}

export default FormSignup
