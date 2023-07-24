import React, { useContext } from 'react';
// import loginImg from '../../assets/20547283_6310507.jpg'
import { GoogleAuthProvider, getAuth, signInWithPopup,FacebookAuthProvider } from 'firebase/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { app } from '../firebase/firebase.config';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                navigate(from, { replace: true })
            })
        // .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="justify-center hero min-h-screen bg-base-200 ">
                    <div>
                        {/* <img className='h-1/2 w-1/2' src={loginImg} alt="" /> */}
                    </div>
                    <div className="hero-content flex-col">
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                         <Link to='/forgot' className="label-text-alt link link-hover">Forgotten Password</Link>
                                    </label>

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />

                                </div>
                                <label className="label">
                                    <p>Don't have an account? <Link to='/register' className="label-text-alt link link-hover">Register</Link></p>
                                </label>
                                <div className="divider">OR</div>
                                <div className='mx-auto flex gap-2'>

                                    <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                        <p className='text-xl text-green-600'>G</p>
                                    </button>
                                    <button onClick={handleFacebookSignIn} className="btn btn-circle btn-outline">
                                        <p className='text-xl text-sky-600'>F</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;