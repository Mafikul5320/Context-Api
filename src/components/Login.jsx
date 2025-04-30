import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './AuthContext';

const Login = () => {
    const { signIn } = use(AuthContext)
    const HandelLogin = (e) => {
        e.preventDefault()
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        signIn(Email, Password).then(user => {
            console.log(user)
        }).catch(error => console.log(error))

    }

    return (
        <div className="card bg-base-100 w-full mx-auto my-18 max-w-sm shrink-0 shadow-2xl">

            <div className="card-body">
                <form onSubmit={HandelLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <div>
                        Are you New this site? <Link className='text-blue-600 underline font-semiboldbold' to={"/register"}>Register</Link>
                    </div>
                    <button className="btn btn-info mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;