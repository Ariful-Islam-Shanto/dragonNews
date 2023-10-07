import React from 'react';
import logo from '../../assets/assets/logo.png';
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <img src={logo} alt="" />
            <h1 className='text-lg'>Journalism Without Fear or Favour</h1>
            <p className='text-xl'>{moment().format('dddd, MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;