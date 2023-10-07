import React, { useContext } from 'react';
import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa';
import QZone1 from '../../../assets/assets/qZone1.png';
import QZone2 from '../../../assets/assets/qZone2.png';
import QZone3 from '../../../assets/assets/qZone3.png';
import bg from '../../../assets/assets/bg.png';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';

const RightSideNav = () => {
    const {googleLogin, facebookLogin, githubLogin} = useContext(AuthContext);


    //? Handling google login
    const handleGoogleLogin = () => {
        googleLogin()
        .then((res) => {
            updateProfile(res.user, {
                displayName: 'Shanto'
            })
            toast.success('Hello!', res.user.displayName, "Successfully created account");
        })
        .catch(() => {
            toast.error('There must be some issue. Please try again.');
        })
    }

    //? Handling GitHub login
    const handleGithubLogin = () => {
        githubLogin()
        .then((res) => {
            toast.success('Hello!', res.user.displayName, "Successfully created account")
        })
        .catch(() => {
            toast.error('There must be some issue. Please try again.');
        })
    }

    const bgClass = {
        backgroundImage: `url(${bg})`,
      };
    return (
        <div className='p-4 space-y-6'>
            <div className=''>
                <h1 className='text-3xl mb-4'>Login with</h1>
                <button onClick={handleGoogleLogin} className='w-full flex items-center gap-1 px-5 py-2 rounded-xl text-black font-medium border border-blue-400 mb-2'><FaGoogle></FaGoogle>Login with Google</button>
                <button onClick={handleGithubLogin} className='w-full flex items-center gap-1 px-5 py-2 rounded-xl text-black font-medium border border-blue-400'><FaGithub></FaGithub>Login with GitHub</button>

            </div>
            <div className=''>
                <h1 className="text-3xl mb-4">Find us on</h1>
                <a href="#"  className='p-4 border rounded-t-lg flex gap-3 items-center font-sm'>
                    <FaFacebook></FaFacebook> <span>Facebook</span>
                </a>
                <a href="#" className='p-4 border flex gap-3 items-center font-sm'>
                    <FaTwitter></FaTwitter> <span>Twitter</span>
                </a>
                <a href="#" className='p-4 border rounded-b-lg flex gap-3 items-center font-sm'>
                    <FaInstagram></FaInstagram> <span>Instagram</span>
                </a>
            </div>
            <div className='bg-[#F3F3F3] p-4 rounded-sm'>
                <h1 className='text-3xl mb-4'>Q-Zone</h1>
                
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
            </div>
            <div style={bgClass} className='w-full' >
                <div className='space-y-4 w-[70%] py-6 mx-auto text-center'>
                <h1 className='text-2xl text-white font-bold'>Create an Amazing Newspaper</h1>
                <p className='text-md text-white font-medium'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='px-7 text-white py-3 bg-[#D72050] font-medium'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;