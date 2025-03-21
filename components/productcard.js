import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.title} className="product-card-img" />
      <div className="product-card-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price} ETH</p>
        <Link href={`/product/${product.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;