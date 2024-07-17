"use client";

import React, { useState } from 'react';

import products from './products'; 

const page = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...currentCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  return (
    <div className="w-11/12 mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-8">Products</h1>
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <div className="border p-4 m-1 rounded shadow-lg shadow-blue-500/50">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="mb-2">Price: {product.price} Rs</p>
          <a href={`/post/${product.id}`} className="text-blue-400 hover:underline">
            View Product
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 ml-2" onClick={() => addToCart(product)}>
              Add to Cart
          </button>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600" onClick={() => window.location.href = '/cart'}>
        Go to Cart
      </button>
    </div>
  );
};

export default page;
