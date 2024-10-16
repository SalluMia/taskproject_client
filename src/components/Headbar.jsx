import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Headbar = () => {
  const navigate = useNavigate();
  const cart = useSelector(state => state.productCart.cart); // Get the cart from the Redux store

  const handleCartClick = () => {
    navigate('/dashboard/cart'); // Navigate to cart page
  };

  return (
    <header className="flex justify-end p-4">
      <button
        onClick={handleCartClick}
        className="text-sm flex justify-center items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full relative"
      >
        <FaCartShopping />
        <span>My Cart</span>
        {cart.length > 0 && (
          <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-xs absolute top-[-10px] right-0">
            {cart.length}
          </span>
        )}
      </button>
    </header>
  );
};

export default Headbar;
