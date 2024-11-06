import { Routes, Route, Navigate } from "react-router-dom";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import LoginForm from "./_auth/forms/LoginForm";
import CreateNewAccount from "./_auth/forms/CreateNewAccount";
import ForgotPassword from "./_auth/forms/ForgotPassword";
import SetNewPassword from "./_auth/forms/SetNewPassword";
import VerifyCode from "./_auth/forms/VerifyCode";

function App() {
  return (
    <Routes>
      {/* Root layout wrapping nested routes */}
      <Route path="/" element={<RootLayout />}>
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

      {/* 404 Not Found Route */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";
// // import { Image } from "cloudinary-react";
// import "./App.css";
// import LoginForm from "./_auth/forms/LoginForm";
// import SignupForm from "./_auth/forms/SignupForm";
// import VerifyCode from "./_auth/forms/VerifyCode";
// import CreateNewAccount from "./_auth/forms/CreateNewAccount";
// import ForgotPassword from "./_auth/forms/ForgotPassword";
// import SetNewPassword from "./_auth/forms/SetNewPassword";
// import AuthLayout from "./_auth/AuthLayout";
// import RootLayout from "./_root/RootLayout";
// import { Home } from "./_root/pages";

// function App() {
//   return (
//     <main className="h-screen">
//       {/* <Image
//         loading="lazy"
//         cloudName={images.cloudname}
//         publicId={images.image1.url}
//       /> */}
//       <Routes>
//         {/* Public routes */}
//         <Route element={<AuthLayout />}>
//           <Route path="/log-in" element={<LoginForm />} />
//           <Route path="/sign-up" element={<SignupForm />} />
//           <Route path="/create-new-account" element={<CreateNewAccount />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/set-new-password" element={<SetNewPassword />} />
//           <Route path="/verify-code" element={<VerifyCode />} />
//         </Route>

//         {/* Private routes */}
//         <Route element={<RootLayout />}>
//           <Route index element={<Home />} />
//           {/* Add more routes as needed under RootLayout here */}
//         </Route>
//       </Routes>
//     </main>
//   );
// }

// export default App;
