"use client";
import products from '../products.js';
import React from 'react';


const page = ({ params }) => {
  const { id } = params;
  const product = products.find((product) => product.id === parseInt(id, 10));
  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
        onClick={() => window.history.back()}>
        Back to Products
      </button>
    </div>
  );
};

export default page;
