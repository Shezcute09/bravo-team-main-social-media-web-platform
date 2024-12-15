// import { Suspense, lazy } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";

//  // Lazy load the components
// // const Messages = lazy(() => import("./_root/pages/Messages"));
// // const Settings = lazy(() => import("./_root/pages/Settings"));
// const Chat = lazy(() => import("./_root/pages/Chat"));
// // const Search = lazy(() => import("./_root/pages/Search"));

// const SignupForm = lazy(() => import("./_auth/forms/SignupForm"));
// const AuthLayout = lazy(() => import("./_auth/AuthLayout"));
// const RootLayout = lazy(() => import("./_root/RootLayout"));
// const LoginForm = lazy(() => import("./_auth/forms/LoginForm"));
// const CreateNewAccount = lazy(() => import("./_auth/forms/CreateNewAccount"));
// const ForgotPassword = lazy(() => import("./_auth/forms/ForgotPassword"));
// const SetNewPassword = lazy(() => import("./_auth/forms/SetNewPassword"));
// const VerifyCode = lazy(() => import("./_auth/forms/VerifyCode"));

// const Home = lazy(() => import("./_root/pages/Home"));
// const UserProfile = lazy(() => import("./_root/pages/UserProfile"));
// const Profile = lazy(() => import("./_root/pages/Profile"));
// const Follower = lazy(() => import("./_root/pages/Follower"));
// const Community = lazy(() => import("./_root/pages/Community"));
// const ForYou = lazy(() => import("./_root/pages/ForYou"));

// function App() {
//   return (
//     <Suspense
//       fallback={
//         <div className="font-sora text-center mt-32 text-4xl font-semibold text-red-600">
//           Loading...
//         </div>
//       }
//     >
//       <Routes>
//         {/* Auth layout wrapping nested routes */}
//         <Route path="/" element={<AuthLayout />}>
//           {/* Redirect the root path to /signup */}
//           <Route index element={<Navigate to="/signup" replace />} />
//           {/* Signup and login routes */}
//           <Route path="signup" element={<SignupForm />} />
//           <Route path="login" element={<LoginForm />} />
//           <Route path="/create-new-account" element={<CreateNewAccount />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/set-new-password" element={<SetNewPassword />} />
//           <Route path="/verify-code" element={<VerifyCode />} />
//         </Route>

//         {/* Root Layout (after login, etc.) */}
//         <Route path="/" element={<RootLayout />}>
//           <Route index element={<Navigate to="/home" replace />} />
//           <Route path="home" element={<Home />} />
//           <Route path="/user-profile" element={<UserProfile />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/follower" element={<Follower />} />
//           <Route path="/community" element={<Community />} />
//           <Route path="/forYou" element={<ForYou />} />
//         </Route>

//         {/* New route structure */}
//         <Route path="/" element={<RootLayout />}>
//           {/* <Route path="messages" element={<Messages />} />
//           <Route path="settings" element={<Settings />} /> */}
//           <Route path="chat" element={<Chat />} />
//           {/* <Route path="search" element={<Search />} /> */}
//         </Route>

//         {/* 404 Not Found Route */}
//         <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default App;



import{Suspense, lazy} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";


const SignupForm = lazy(() => import("./_auth/forms/SignupForm"));
const AuthLayout = lazy(() => import("./_auth/AuthLayout"));
const RootLayout = lazy(() => import("./_root/RootLayout"));
const LoginForm = lazy(() => import("./_auth/forms/LoginForm"));
const CreateNewAccount = lazy(() => import("./_auth/forms/CreateNewAccount"));
const ForgotPassword = lazy(() => import("./_auth/forms/ForgotPassword"));
const SetNewPassword = lazy(() => import("./_auth/forms/SetNewPassword"));
const VerifyCode = lazy(() => import("./_auth/forms/VerifyCode"));

const Home = lazy(() => import("./_root/pages/Home"));
const UserProfile = lazy(() => import("./_root/pages/UserProfile"));
const Profile = lazy(()=>import("./_root/pages/Profile")) ;
const Follower = lazy(()=>import("./_root/pages/Follower")) ;
const Community = lazy(()=>import("./_root/pages/Community")) ;
const Messages = lazy(()=>import("./_root/pages/Messages")) ;
const Chat = lazy(()=>import("./_root/pages/Chat")) ;
const ForYou = lazy(()=>import("./_root/pages/ForYou")) ;



function App() {
  return (
    <Suspense
    fallback={
      <div className="font-sora text-center mt-32 text-4xl font-semibold text-red-600">
        Loading...
      </div>
    }
  >
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
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/follower" element={<Follower />} />
        <Route path="/community" element={<Community />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/forYou" element={<ForYou />} />
      </Route>

      {/* 404 Not Found Route */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
    </Suspense>
  );
}

export default App;
