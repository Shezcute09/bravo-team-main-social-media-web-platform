import { Outlet } from "react-router-dom";
import Leftside from "../components/leftsidebar/Leftside";
import Rightside from "../components/rightsidebar/Rightside";
import People from "../components/people/People";

const RootLayout = () => {
  return (
    <div className="w-full grid md:grid-cols-[1fr_2fr_1fr]">
      <Leftside/>

      <section className="">
        <Outlet/>
      </section>

      {/* <Rightside/> */}
      <People/>

      
    </div>
  );
};

export default RootLayout;
