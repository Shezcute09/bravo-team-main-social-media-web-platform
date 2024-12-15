import { Outlet, useLocation } from "react-router-dom";
import Leftside from "../components/leftsidebar/Leftside";
import Rightside from "../components/rightsidebar/Rightside";
import People from "../components/people/People";

const RootLayout = () => {
  const location = useLocation();

  // Check if current location is '/chat' or '/messages'
  const hideRightside = location.pathname === "/chat" || location.pathname === "/messages";  // Hide Rightside on /chat or /messages
  const hidePeople = location.pathname === "/messages" || location.pathname === "/chat";  // Hide People on /messages or /chat

  return (
    <div className="w-full grid md:grid-cols-[1fr_2fr_1fr]">
      {/* Left Sidebar */}
      <Leftside />

      {/* Main Content Area */}
      <section>
        <Outlet />
      </section>

      {/* Right Sidebar (conditionally rendered based on the current route) */}
      {!hideRightside && <Rightside />}

      {/* Render People Component only if not on Messages or Chat page */}
      {!hidePeople && <People />}
    </div>
  );
};

export default RootLayout;


// import { Outlet } from "react-router-dom";
// import Leftside from "../components/leftsidebar/Leftside";
// import Rightside from "../components/rightsidebar/Rightside";
// import People from "../components/people/People";

// const RootLayout = () => {
//   return (
//     <div className="w-full grid md:grid-cols-[1fr_2fr_1fr]">
//       <Leftside/>

//       <section className="">
//         <Outlet/>
//       </section>

//       {/* <Rightside/> */}
//       <People/>

      
//     </div>
//   );
// };

// export default RootLayout;
