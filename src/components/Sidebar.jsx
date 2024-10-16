import { Link, useLocation } from "react-router-dom"; // Import useLocation for active link styling
import { FaTachometerAlt, FaBoxes, FaBell, FaChartLine, FaClipboardList } from "react-icons/fa"; // Import icons
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/authSlice";

const Sidebar = () => {
  const location = useLocation(); // Get the current location
  const dispatch=useDispatch()

  const handleLogout=()=>{
      dispatch(signOut())
  }
  return (
    <aside className="w-2/12 bg-white shadow-md p-4 h-full ">
      <div className="flex gap-2 my-5">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s" alt="" className="h-10 w-10 rounded-md object-cover" />
          <div>
               <h1 className="m-0 p-0 font-semibold">Mark Wood</h1>
               <p className="text-sm m-0 p-0">mark@gmail.com</p>
          </div>
      </div>
      <ul className="  h-[80vh] ">
        <li className="mb-2">
          <Link
            to="/dashboard"
            className={`flex items-center p-2 rounded-md transition duration-200
                        ${location.pathname === '/dashboard' ? 'bg-[#89089F] text-white' : 'text-gray-600 hover:bg-purple-100'}`}
          >
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboard/products"
            className={`flex items-center p-2 rounded-md transition duration-200
                        ${location.pathname === '/dashboard/products' ? 'bg-[#89089F] text-white' : 'text-gray-600 hover:bg-purple-100'}`}
          >
            <FaBoxes className="mr-2" />
            Products
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboard/notifications"
            className={`flex items-center p-2 rounded-md transition duration-200
                        ${location.pathname === '/dashboard/notifications' ? 'bg-[#89089F] text-white' : 'text-gray-600 hover:bg-purple-100'}`}
          >
            <FaBell className="mr-2" />
            Notifications
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboard/analytics"
            className={`flex items-center p-2 rounded-md transition duration-200
                        ${location.pathname === '/dashboard/analytics' ? 'bg-[#89089F] text-white' : 'text-gray-600 hover:bg-purple-100'}`}
          >
            <FaChartLine className="mr-2" />
            Analytics
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dashboard/inventory"
            className={`flex items-center p-2 rounded-md transition duration-200
                        ${location.pathname === '/dashboard/inventory' ? 'bg-[#89089F] text-white' : 'text-gray-600 hover:bg-purple-100'}`}
          >
            <FaClipboardList className="mr-2" />
            Inventory
          </Link>
        </li>

        <button className="flex   w-full mt-72 justify-start items-end gap-2 text-gray-600" onClick={handleLogout}>

           <span className="flex justify-start items-center gap-2">
           <IoMdLogOut  />
           Logout
           </span>

        </button>
      </ul>
    </aside>
  );
};

export default Sidebar;
