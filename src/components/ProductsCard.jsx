import React from 'react';
import sneakers from '../data/sneakers';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/productCartSlice'; // Import addToCart action
import toast, { Toaster } from 'react-hot-toast';

export default function ProductsCard() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.productCart.cart); // Get the cart from the Redux store

  const handleAddToCart = (sneaker) => {
    const alreadyInCart = cart.find(item => item.id === sneaker.id);
    if (alreadyInCart) {
      toast.error("Product already added to cart.");
    } else {
      dispatch(addToCart(sneaker));
      toast.success("Product added to cart!");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Toaster/>
      {sneakers.map((sneaker) => (
        <div
          key={sneaker.id}
          className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105"
        >
          <img
            src={sneaker.image}
            alt={`${sneaker.brand} ${sneaker.model}`}
            className="w-full h-48 object-cover"
          />
          <div className='flex border'>
            <button
              onClick={() => handleAddToCart(sneaker)}
              className='text-xs font-semibold bg-black text-white px-2 py-3 w-full uppercase'
            >
              Add to Cart
            </button>
            <button className='text-xs font-semibold bg-[#89089F] text-white p-2 w-full uppercase'>
              Quick Review
            </button>
          </div>
          <div className="py-3 px-2">
            <div className='flex justify-between'>
              <h2 className="text-sm font-bold uppercase">
                {sneaker.brand} {sneaker.model}
              </h2>
              <p className="text-sm font-bold flex justify-center items-center gap-1">
                <FaHeart className='text-[#89089F]' /> ${sneaker.price}.00
              </p>
            </div>
            <hr className='my-2 h-[2px] w-full bg-gray-300 rounded-md' />
            <div className="flex justify-between items-center">
              {/* Display rating stars */}
              <div>
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < Math.floor(sneaker.rating) ? "text-gray-700" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
