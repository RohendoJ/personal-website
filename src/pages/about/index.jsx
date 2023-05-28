import { lazy } from "react";
import imageLaptop from "../../assets/img/laptop.jpg";

const Navbar = lazy(() => import("../../components/navbar"));

const About = () => {
  return (
    <>
      <Navbar styleAbout="text-[#0A9EF1]" />
      <div className="md:flex md:ml-[20vh] gap-[5vw] lg:ml-[33vh]">
        <div className="flex justify-center items-center mt-[10vh] md:items-start">
          <img
            src={imageLaptop}
            alt="about"
            className="w-[60vw] md:w-[35vw] lg:w-[30vw]"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-[5vh] md:items-start md:mt-[9vh]">
          <h2 className="text-[#0A9EF1]">About me</h2>
          <h1 className="text-[#010448] font-extrabold text-[1.5rem] text-center w-[60vw] mt-[2vh] md:w-[30vw] md:text-[1rem] md:text-left md:mt-[1vh] lg:text-[1.2rem]">
            A student at the Nusantara Islamic University
          </h1>
          <p className="text-slate-700 w-[60vw] text-left mt-[2vh] pb-[10vh] md:w-[30vw] md:mt-[1vh] md:text-[0.8rem] lg:text-[0.9rem]">
            I have skills in web development especially frontend, the
            technologies currently used include html, css, javascript,
            tailwindcss, reactjs, nodejs, mysql and firebase, by the way I also
            have figma web design skills :)
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
