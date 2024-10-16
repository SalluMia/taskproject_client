import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { addProduct } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [productData, setProductData] = useState({
    brand: '',
    model: '',
    color: '',
    price: '',
    image: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!productData.brand || !productData.model || !productData.price || !productData.image) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Dispatch action to add product and store in localStorage
    dispatch(addProduct(productData));
    localStorage.setItem('products', JSON.stringify([...JSON.parse(localStorage.getItem('products') || '[]'), productData]));
    toast.success('Product added successfully');
    setProductData({
      brand: '',
      model: '',
      color: '',
      price: '',
      image: '',
    });
    navigate('/dashboard')

  };

  return (
    <div className=" mx-auto my-10 p-6 border bg-white rounded-lg shadow-md">
      <Toaster />
      <h2 className="text-2xl font-bold  mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Brand */}
        <div>
          <label className="block text-gray-700">Brand</label>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Nike, Adidas..."
            required
          />
        </div>

        {/* Model */}
        <div>
          <label className="block text-gray-700">Model</label>
          <input
            type="text"
            name="model"
            value={productData.model}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Air Max, Ultraboost..."
            required
          />
        </div>

        {/* Color */}
        <div>
          <label className="block text-gray-700">Color</label>
          <input
            type="text"
            name="color"
            value={productData.color}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Black/White, Grey..."
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="150, 180..."
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Image URL or select from file"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#BA68C8] text-white py-2 rounded-md hover:bg-[#89089F] transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
