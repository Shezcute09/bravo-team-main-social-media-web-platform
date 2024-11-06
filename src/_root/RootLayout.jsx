import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes

const RootLayout = () => {
  return (
    <div>
      {/* <h1>Root Layout</h1> */}
      <Outlet /> {/* This will render child routes like Signup or Login */}
    </div>
  );
};

export default RootLayout;


// const RootLayout = () => {
//   return (
//     <div>
//       <h1>RootLayout</h1>
//       <Outlet />
//     </div>
//   );
// };

// export default RootLayout;
