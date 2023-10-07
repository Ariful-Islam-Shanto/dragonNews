import React from "react";
import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const CategoryNews = ({ displayNews, handleNewsDetails }) => {
    const location = useLocation();
    const pathName = location.pathname;
  const {
    _id,
    author,
    category_id,
    image_url,
    details,
    rating,
    total_view,
    thumbnail_url,
    title,
  } = displayNews;
  // const {img, name, published_date} = author;
  // const {badge, number} = rating;

  return (
    <div onClick={() => handleNewsDetails(_id, pathName)}>
      {/* Author information section */}
      <div className="flex bg-[#F3F3F3] p-4 items-center justify-between">
        <div className="flex items-center gap-6">
          <img src={author?.img} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <p className="block text-sm text-black font-semibold">
              {author.name ? author.name : "Ariful Islam Shanto"}
            </p>
            <p className="block text-xs text-gray-400 font-medium">
              {author.published_date ? author.published_date : "No date"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaBookmark></FaBookmark>
          <FaShare></FaShare>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <img src={thumbnail_url} className="w-full h-[250px]" alt="" />
        <p className="text-gray-500 text-lg">
          {details.slice(0, 300)}
          <span className="text-xl text-yellow-400 font-semibold">
            Read more...
          </span>
        </p>

        <div className="border"></div>

        <div className="flex items-center justify-between">
            <p>
        <Rating name="half-rating" defaultValue={rating.number} precision={0.5} />
        </p>
        <p className="flex items-center gap-2">
            <FaEye></FaEye> <span>{total_view}</span>
        </p>
        </div>
      </div>
    </div>
  );
};

CategoryNews.propTypes = {
  displayNews: PropTypes.object,
  handleNewsDetails: PropTypes.function,
};

export default CategoryNews;
