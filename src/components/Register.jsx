// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './AuthContext';
// import { auth } from './LoginReg';

const Register = () => {
    const CreateNewUser = use(AuthContext);
    const { createUser } = (CreateNewUser)
    const HandelRegister = (event) => {
        event.preventDefault()
        const Name = event.target.name.value;
        const Email = event.target.email.value;
        const Password = event.target.Password.value;
        console.log(Name, Email, Password)
        createUser(Email, Password).then(res => console.log(res)).catch(error => error.message)
        // createUserWithEmailAndPassword(auth, Email, Password).then(res => console.log(res)).catch(error => console.log(error))
    }
    return (
        <div className="card bg-base-100 w-full mx-auto my-18 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={HandelRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='Password' type="password" className="input" placeholder="Password" />
                    <div>
                        <h1>You Have Already Account? <Link className='text-blue-600 underline' to={"/login"}>Login</Link></h1>
                    </div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;