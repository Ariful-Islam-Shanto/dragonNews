import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Png1 from '../../../assets/assets/1.png';
import Png2 from '../../../assets/assets/2.png';
import Png3 from '../../../assets/assets/3.png';
import {AiOutlineCalendar} from 'react-icons/ai';
import moment from 'moment';

const LeftsideNav = ({handleNewsId}) => {

    const [categories, setCategories] = useState([]);
    

   useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
   },[])



    const handleCategory = (id) => { 
        handleNewsId(id);
    }

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>All Category</h1>
            <div>
            {
                categories.map(category => 
                <button  className='block text-center mb-4 w-full text-xl font-medium' id={`${category.id}`} key={category.id} onClick={() => {
                    handleCategory(category.id);
                }}> 
                    {category.name}
                </button>)
                
            }
            </div>
            <div >
                <div className='p-4 space-y-5'>
                <img src={Png1} alt="" />
                <h1 className="text-xl text-black font-semibold">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
                </h1>
                <div className='flex items-center gap-6'>
                    <p>Sport</p>
                    <p className='flex items-center gap-2'>
                    <AiOutlineCalendar></AiOutlineCalendar>
                    <span>{moment().format('MMMM Do YYYY')}</span>
                    </p>
                </div>
                </div>
                <div className='p-4 space-y-5'>
                <img src={Png2} alt="" />
                <h1 className="text-xl text-black font-semibold">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
                </h1>
                <div className='flex items-center gap-6'>
                    <p>Sport</p>
                    <p className='flex items-center gap-2'>
                    <AiOutlineCalendar></AiOutlineCalendar>
                    <span>{moment().format('MMMM Do YYYY')}</span>
                    </p>
                </div>
                </div>
                <div className='p-4 space-y-5'>
                <img src={Png3} alt="" />
                <h1 className="text-xl text-black font-semibold">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
                </h1>
                <div className='flex items-center gap-6'>
                    <p>Sport</p>
                    <p className='flex items-center gap-2'>
                    <AiOutlineCalendar></AiOutlineCalendar>
                    <span>{moment().format('MMMM Do YYYY')}</span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LeftsideNav;