import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!localStorage.getItem("authUser"),
    user: JSON.parse(localStorage.getItem("authUser")) || null,
  },
  reducers: {
    signUp(state, action) {
      const { email, password } = action.payload;
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if user already exists
      const userExists = users.find(u => u.email === email);
      if (userExists) {
        throw new Error("User already exists");
      }

      // Save email and password to localStorage
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));

      // Update Redux state
      state.isAuthenticated = true;
      state.user = { email };
      localStorage.setItem("authUser", JSON.stringify({ email }));
    },
    signIn(state, action) {
      const { email, password } = action.payload;
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Find the user
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        // Successful login
        state.isAuthenticated = true;
        state.user = { email };
        localStorage.setItem("authUser", JSON.stringify({ email }));
      } else {
        // If user not found or password doesn't match
        throw new Error("Invalid email or password");
      }
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { signUp, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
