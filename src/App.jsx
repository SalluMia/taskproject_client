// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./pages/Products"; // Ensure this file exists
import Cart from "./pages/Cart"; // Ensure this file exists
import { Toaster } from "react-hot-toast";
import withDashboardLayout from "./hocs/withDashboardLayout"; // Ensure correct path
import NotFound from "./components/NotFound";

// Wrap both components with HOC
const EnhancedProducts = withDashboardLayout(Products);
const EnhancedCart = withDashboardLayout(Cart);

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Default route to Products when navigating to /dashboard */}
        <Route path="/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <EnhancedProducts />  {/* Default to Products */}
          </ProtectedRoute>
        } />

        {/* Protected route for Cart */}
        <Route path="/dashboard/cart" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <EnhancedCart />  {/* Wrap Cart with HOC */}
          </ProtectedRoute>
        } />

        {/* You can add more protected routes as needed */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
