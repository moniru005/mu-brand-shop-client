import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from './AuthProvider';
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = () =>{
        googleSignIn().then(result=>{
            console.log(result.user)

            navigate(location?.state ? location.state : '/');
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    return (
        <div className='flex flex-col items-center justify-center mx-auto'>
            <button onClick={handleGoogleSignIn}><FaGoogle className='text-4xl text-slate-800'></FaGoogle>

            </button>
            <p className='text-sm text-slate-800'><small>Google Sign in</small> </p>
        </div>
    );
};

export default SocialLogin;