import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import ProductCard from './ProductCard';

function ProductsList() {
  const { products } = useContext(GlobalContext);

  return (
    <div>
      { products.map((product) => <ProductCard key={ product.id } product={ product } />)}
    </div>
  );
}

export default ProductsList;
