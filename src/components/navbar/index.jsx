import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [open, isOpen] = useState(false);

  const toggle = () => {
    isOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <>
      <nav>
        <div className="flex justify-between mx-[10vw] m-[5vh]">
          <Link
            to="/"
            className="font-extrabold text-[1.2rem] text-[#010448] md:text-[1.5rem]"
          >
            Rohendo <span className="text-[#159EEC] font-extrabold">.</span>
          </Link>
          <div
            className="flex flex-col gap-1 mt-[1vh] w-[8vw] h-[3vh] lg:hidden"
            onClick={toggle}
          >
            <div
              className={`duration-500 delay-150 w-[7vw] h-[0.5vh] rounded-md bg-black ${
                open ? "rotate-45 translate-y-[0.35rem]" : "rotate-0"
              } z-20 relative md:w-[4vw]`}
            ></div>
            <div
              className={`duration-500 delay-150 w-[7vw] h-[0.5vh] rounded-md bg-black ${
                open ? "opacity-0" : ""
              } z-20 relative md:w-[4vw]`}
            ></div>
            <div
              className={`duration-500 delay-150 w-[7vw] h-[0.5vh] rounded-md bg-black ${
                open ? "-rotate-45 -translate-y-[0.5rem]" : "rotate-0"
              } z-20 relative md:w-[4vw]`}
            ></div>
          </div>
          <div className="gap-1 mt-[1vh] h-[3vh] hidden lg:flex">
            <ul className="flex justify-between gap-[2vw]">
              <Link
                to="/"
                className={`hover:text-[#0A9EF1] duration-300 ${props.styleHome}`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`hover:text-[#0A9EF1] duration-300 ${props.styleAbout}`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`hover:text-[#0A9EF1] duration-300 ${props.styleProjects}`}
              >
                Projects
              </Link>
            </ul>
          </div>
          <a
            href="mailto:rohendoj3134@gmail.com"
            className="bg-[#0A9EF1] px-[2vw] text-white rounded-md hidden items-center lg:flex hover:bg-[#ade1ff] hover:text-[#0A9EF1] xl:px-[1.5vw] 2xl:px-[1.5vw] duration-300"
          >
            Let's Chat
          </a>
        </div>
      </nav>
      {open ? (
        <div className="w-screen h-[120vh] bg-[#F9FDFF] absolute top-0 translate-y-0 z-10 delay-150 duration-300 ease-in-out flex flex-col justify-center items-center lg:-translate-y-[120vw]">
          <ul className="flex flex-col gap-10 text-center text-[1.5rem] mb-[20vh]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <a href="mailto:rohendoj3134@gmail.com">Let's Chat</a>
          </ul>
        </div>
      ) : (
        <div className="w-screen h-screen bg-[#F9FDFF] absolute top-0 -translate-y-[100vh] z-10 delay-150 duration-300 ease-in-out flex flex-col justify-center items-center">
          <ul className="flex flex-col gap-10 text-center text-[1.5rem]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <a
              href="mailto:rohendoj3134@gmail.com"
              target="_blank"
              onClick={closeNavbar}
            >
              Let's Chat
            </a>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
