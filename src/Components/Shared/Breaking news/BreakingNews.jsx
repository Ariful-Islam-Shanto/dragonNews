import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='bg-[#F3F3F3] p-4 flex rounded-md items-center'>
            <button className='bg-[#D72050] rounded-md px-5 py-2 text-white'>Latest</button>
            <Marquee direction='left' pauseOnHover={true} speed={50}>
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>

        </div>
    );
};

export default BreakingNews;