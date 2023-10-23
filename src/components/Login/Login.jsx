import React, { useState } from 'react';

const Login = () => {
   const [show , setShow] =  useState(false)
    // const handleSignUp = (event) =>{
    //     event.preventDefault()
    //     const form = event.target;
    //     const email =  form.email.value;
    //     const password =  form.password.value;
    //    console.log(email, password)
    // }

    return (
       <div>
          <div className="hero min-h-screen bg-base-200">
             <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left"></div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                   <form className="card-body">
                      <h1 className="text-5xl font-bold">Login now!</h1>
                      <div className="form-control">
                         <label className="label">
                            <span className="label-text">Email</span>
                         </label>
                         <input type="email" placeholder="email" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                         <label className="label">
                            <span className="label-text">Password</span>
                         </label>
                         <input type={show ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                         <p onClick={() => setShow(!show)}>
                            <small>{show ? <span>Hide password</span> : <span> show password</span>}</small>
                         </p>
                         <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                               Forgot password?
                            </a>
                         </label>
                      </div>
                      <div className="form-control mt-6">
                         <button className="btn btn-primary">Login</button>
                      </div>
                   </form>
                </div>
             </div>
          </div>
       </div>
    );
};

export default Login;