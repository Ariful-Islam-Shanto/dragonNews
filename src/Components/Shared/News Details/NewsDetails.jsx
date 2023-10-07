import moment from 'moment';
import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaArchway, FaArrowLeft } from 'react-icons/fa';
import editorImg1 from '../../../assets/assets/editorsInsight1.png';
import editorImg2 from '../../../assets/assets/editorsInsight2.png';
import editorImg3 from '../../../assets/assets/editorsInsight3.png';

const NewsDetails = ({showDetails, setIsShowDetails}) => {

    const {
        author,
        category_id,
        image_url,
        details,
        rating,
        total_view,
        thumbnail_url,
        title,
      } = showDetails;
    return (
        <div>
        <div className='space-y-6 p-4'>
            <img src={thumbnail_url} alt="" className='w-full h-[400px]' />
            <h1 className='text-4xl text-black font-bold'>{title}</h1>
            <p className='text-xl text-gray-500 font-medium'>{details}</p>
            <button onClick={() => setIsShowDetails(false)} className='bg-[#D72050] px-5 py-2 rounded-md flex items-center gap-2 text-white'><FaArrowLeft></FaArrowLeft> All news in this category</button>
        </div>
        <div className='p-4 space-y-4'>
            <h1 className='text-2xl text-black font-semibold'>Editors Insight</h1>

            <div className='grid md:grid-cols-3 gap-4'>

            <div className=' space-y-5'>
                <img src={editorImg1} alt="" />
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
            <div className=' space-y-5'>
                <img src={editorImg2} alt="" />
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
            <div className=' space-y-5'>
                <img src={editorImg3} alt="" />
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
        </div>
    );
};

export default NewsDetails;