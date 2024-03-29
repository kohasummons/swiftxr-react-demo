import React from 'react';
import ProductCard from './ProductCard';
import { productItems } from '../constants';

const ProductCards = () => {
  return (
    <div className='my-[80px] grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-x-0 gap-x-16 gap-y-8'>
      {productItems.map((productItem) => (
        <ProductCard
          title={productItem.title}
          description={productItem.description}
          price={productItem.price}
          imageSrc={productItem.imageSrc}
          key={productItem.title}
          category={productItem.category}
        />
      ))}
    </div>
  );
};

export default ProductCards;
