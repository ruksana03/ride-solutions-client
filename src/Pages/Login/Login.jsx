import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleLogin =event =>{
        event.preventDefault();
        const form = event.target;
        // const name =  form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email,pass);

        signIn(email,pass)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                   
                  <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border-2">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                            name='password' 
                            placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                          
                            <input className="btn bg-[#FF3811] text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='my-8 text-center'>New to here ? <Link to='/signUp' className='text-[#FF3811] font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;