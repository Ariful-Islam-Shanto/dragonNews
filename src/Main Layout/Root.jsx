import React from 'react';
import Nav from '../Components/NavBar/Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;