import React from 'react';

const ForgotPassword = () => {
    return (
        <div>
             <form >
               
                   
                    <div className="hero-content flex-col justify-center hero min-h-screen bg-base-200">
                        <h1 className="text-5xl font-bold mb-5">Forgot-Password!</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                               
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                
            </form>
        </div>
    );
};

export default ForgotPassword;