import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // State for the current slide
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();


  const images = [
    "https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png",
    "https://adrack.com/wp-content/uploads/2021/12/signup.png",
    "https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--account-login-miscellaneous-pack-illustrations-5230178.png?f=webp",
  ];


  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(signIn({ email, password }));

      if (isAuthenticated) {
        toast.success("Successfully logged in!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      toast.error(error.message || "Login failed! Please try again.");
    }
  };

    // Function to handle dot click
    const handleDotClick = (index) => {
        setCurrentSlide(index);
      };
  return (
    <div className="flex bg-white h-screen">
        <Toaster/>
        <div className="hidden md:block w-1/2 bg-[#89089F]  relative">
      <div className="flex flex-col border justify-center items-center h-full">
                {/* Custom Carousel */}
                    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className=" w-2/5 h-2/5 object-cover mb-4" />

                {/* Dots Navigation */}
                <div className="text-center mb-5">
                     <h1 className="text-2xl text-white font-semibold">Welcome to Our Shop</h1>
                      <p className="text-white">Purchase imported shoes</p>
                </div>
                <div className="flex space-x-2">
                {images.map((_, index) => (
                    <div
                    key={index}
                    className={`h-2 w-2 rounded-full cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-gray-300'}`}
                    onClick={() => handleDotClick(index)}
                    />
                ))}
                </div>
      </div>


      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 p-6">
        <h1 className="text-3xl mb-4 text-center">Welcome Back!</h1>
        <form onSubmit={handleSubmit} className="px-20">
          {/* Email Input */}
          <div className="mb-4 relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input with Show/Hide */}
          <div className="mb-4 relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="absolute right-3 top-3 text-gray-400 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
          </div>
          <button type="submit" className="w-full p-2 bg-[#89089F] text-white rounded-full hover:bg-[#88088F] transition">Log In</button>
        </form>
        <div className="px-20">
          <span className="mt-4 text-center block">Have no account yet?</span>
          <Link to="/signup" className="block border rounded-full border-[#89089F] text-center py-2 mt-4 text-[#89089F]">Registration</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
