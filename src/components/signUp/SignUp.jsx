import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = (event) => {
      const [error, setError] =  useState('');
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       const confirmPassword = form.confirmPassword.value;
       console.log(email, password,confirmPassword);
       if(password !== confirmPassword){
         setError('your password not mach');
         return
       }
       else if(password.length < 6){
         setError(' must be 6 characters')
         return
       }

    };
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="text-center lg:text-left"></div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSignUp} className="card-body">
                     <h1 className="text-5xl font-bold">SignUp</h1>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" className="input input-bordered" required />
                        <label className="label">
                           <Link to="/login" className="label-text-alt link link-hover">
                              already have an account ?
                           </Link>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                     </div>
                     <p>{error}</p>
                  </form>
                  
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;