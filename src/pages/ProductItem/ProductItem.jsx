import React from 'react';
import ProductDetails from '../../components/ProductDetails';
import { Link, useParams } from 'react-router-dom';
import { productItems } from '../../constants';

const ProductItem = () => {
  const { item } = useParams();

  const product = productItems.filter(
    (productItem) => productItem.title === item
  );

  console.log({item, product})
  return (
    <div>
      <ProductDetails description={product[0].description} title={product[0].title} swiftxrUrl={product[0]['swiftxr-url']}/>
    </div>
  );
};

export default ProductItem;
