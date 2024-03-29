import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageSrc, title, category, description, price }) => {
  return (
    <Link to={`/${category}/${title}`}>
      <div className='max-w-[440px] h-fit'>
        <img
          src={imageSrc}
          alt={title}
          className='w-full h-full object-cover'
        />
        <div className='flex flex-col my-2 px-1'>
          <div className='flex flex-col'>
            <h3 className='font-bold text-2xl'>{title}</h3>
            <p className='text-sm'>{price}</p>
          </div>
          <p className='ellipsis-text text-[#A8A8A8] pt-1'>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
