import React from 'react';
import basslik from '../assets/basslik.png';
import IconStar from '../assets/icon-star.svg';
import { Link } from 'react-router-dom';

const ProductDetails = ({ description, title, price, swiftxrUrl }) => {
  return (
    <main>
      <div className='mt-14'>
        <Link to={'/'}>
          <p className='select-none'>
            <span className='mr-2'>&lt;</span>
            Shelf &#x1F784; Loomin bones
          </p>
        </Link>
      </div>
      <div className='pt-4 flex gap-8'>
        <div className=''>
          {/* <img src={basslik} alt='' className='w-[640px] h-[576px]' /> */}
          <div style={{ width: '100%', height: '480px' }}>
            <iframe
              title='Valzo'
              loading='lazy'
              allowFullScreen
              allow='fullscreen; autoplay; xr-spatial-tracking; camera; midi; encrypted-media;'
              width='100%'
              height='100%'
              src={swiftxrUrl}
            ></iframe>
          </div>
          <div className='flex gap-2 pt-3'>
            <span className='bg-[#f1f1f1] w-52 h-44'></span>
            <span className='bg-[#f1f1f1] w-52 h-44'></span>
            <span className='bg-[#f1f1f1] w-52 h-44'></span>
          </div>
        </div>
        <div>
          <div>
            <p
              className={`w-fit text-black text-xl px-11 py-2 border border-black rounded-full cursor-pointer select-none`}
            >
              Category &#x1F784; Shelf
            </p>
          </div>
          <div>
            <h1 className='text-6xl font-medium tracking-tighter mt-4'>
              The Shelf of Antartica
            </h1>
            <div className='flex mt-3 gap-3'>
              <span>
                <img className='w-5 h-5' src={IconStar} alt='star' />
              </span>
              <span>4.8k Reviews</span>
            </div>
          </div>
          <div className='mt-16'>
            <h3>Description</h3>
            <p className='tracking-tighter w-4/6 pt-2 text-[#959595]'>
              {description}
            </p>
          </div>
          <div>
            <span className='w-40 h-40 bg-[#b63131]'></span>
            <span className='w-40 h-40 bg-[#959595]'></span>
          </div>
          <div className='flex mt-5 gap-3'>
            <div className='w-fit bg-black text-white text-xl px-11 py-2 border border-black rounded-full cursor-pointer select-none'>
              Buy Now
            </div>
            <div className='w-fit text-black text-xl px-11 py-2 border border-black rounded-full cursor-pointer select-none'>
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
