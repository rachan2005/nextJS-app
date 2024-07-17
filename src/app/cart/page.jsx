"use client";

import React, { useEffect, useState } from 'react';

const page = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {const storedCart = JSON.parse(localStorage.getItem('cart')) || []; setCart(storedCart); }, []);
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  return (
    <div className="w-11/12 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="flex-1">
        {cart.map((product, index) => (
          <li key={index} className="border my-2 p-4 rounded shadow-lg shadow-blue-500 duration-150 hover:scale-x-110 hover:rotate-1">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>Price: {product.price} Rs</p>
            <button 
              className="bg-red-500 mt-4 text-white px-4 py-2 rounded hover:bg-red-600 ml-2" 
              onClick={() => removeFromCart(product)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button 
            className="mt-4 mx-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
            onClick={() => window.location.href = '/post'}>
            Back to Products
        </button>
        <button 
            className="mt-4 mx-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-900" onClick={() => window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
            Check Out
        </button>
        </div> 
    </div>
  );
};

export default page;
