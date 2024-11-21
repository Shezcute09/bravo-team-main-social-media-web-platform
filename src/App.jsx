import { Routes, Route, Navigate } from "react-router-dom";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import LoginForm from "./_auth/forms/LoginForm";
import CreateNewAccount from "./_auth/forms/CreateNewAccount";
import ForgotPassword from "./_auth/forms/ForgotPassword";
import SetNewPassword from "./_auth/forms/SetNewPassword";
import VerifyCode from "./_auth/forms/VerifyCode";
import "./App.css";
import Home from "./_root/pages/Home";
import UserProfile from "./_root/pages/UserProfile";

function App() {
  return (
    <Routes>
      {/* Auth layout wrapping nested routes */}
      <Route path="/" element={<AuthLayout />}>
        {/* Redirect the root path to /signup */}
        <Route index element={<Navigate to="/signup" replace />} />
        {/* Signup and login routes */}
        <Route path="signup" element={<SignupForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="/create-new-account" element={<CreateNewAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
      </Route>

      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />

        <Route path="user-profile" element={<UserProfile />} />
      </Route>

      {/* 404 Not Found Route */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
