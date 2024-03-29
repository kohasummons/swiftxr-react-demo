import React, { useState } from 'react';

export const HeroSection = () => {
  const categories = ['Shelfs', 'Frames', 'Ikro', 'Remolin'];
  const [selectedCategory, setSelectedCategory] = useState('Shelfs');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  return (
    <div className='pt-16'>
      <h1 className='text-[128px]'>Catalog</h1>
      <div className='flex items-end justify-between mt-2'>
        <ul className='flex gap-4'>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`${
                category === selectedCategory ? 'bg-[#C3FB22]' : ''
              } text-black text-xl px-11 py-2 border border-black rounded-full cursor-pointer select-none`}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className='flex justify-end gap-4'>
          <p>Showing 0 of 10 results</p>
          <p>
            <span className='font-bold ml-1'>Sort by:</span> Default
          </p>
        </div>
      </div>
    </div>
  );
};
