import { Routes, Route } from "react-router-dom";
// import { Image } from "cloudinary-react";
import "./App.css";
import LoginForm from "./_auth/forms/LoginForm";
import SignupForm from "./_auth/forms/SignupForm";
import VerifyCode from "./_auth/forms/VerifyCode";
import CreateNewAccount from "./_auth/forms/CreateNewAccount";
import ForgotPassword from "./_auth/forms/ForgotPassword";
import SetNewPassword from "./_auth/forms/SetNewPassword";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
// import { images } from "./data/basics.json";

function App() {
  return (
    <main className=" h-screen">
      {/* <Image
        loading="lazy"
        cloudName={images.cloudname}
        publicId={images.image1.url}
      /> */}
      <Routes>
        {/* public routes  */}
        <Route element={<AuthLayout />}>
          <Route path="/log-in" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/create-new-account" element={<CreateNewAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
        </Route>

        {/* private routes  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
