import { lazy } from "react";
import projectOne from "../../assets/img/project1.png";
import projectTwo from "../../assets/img/project2.png";

const Navbar = lazy(() => import("../../components/navbar"));

const Projects = () => {
  return (
    <>
      <Navbar styleProjects="text-[#0A9EF1]" />
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-[#0A9EF1] text-[1.5rem]">
            Portofolio
          </h1>
          <h3 className="text-slate-500 text-[0.7rem] lg:text-[1rem]">
            “Progress is progress, no matter how small”
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[10vw]">
          <div className="flex justify-center items-center mt-[5vh]">
            <div className="border border-slate-400 rounded-md w-[70vw] h-[40vh] bg-[#F2FCFF] overflow-hidden md:w-[30vw] md:h-[40vh] lg:h-[47vh] xl:w-[25vw]">
              <img
                src={projectOne}
                alt="project1"
                className="object-cover w-full h-[50%]"
              />
              <h1 className="font-extrabold ml-[5vw] mt-[1vh] md:ml-[2vw]">
                Firebase Auth
              </h1>
              <p className="text-[0.6rem] ml-[5vw] md:ml-[2vw] md:text-[0.8rem]">
                Just simple auth using react and firebase.
              </p>
              <div className="flex gap-[2vw] ml-[5vw] mt-[1vh] md:ml-[2vw] md:gap-[1vw]">
                <div className="w-[20vw] h-[3vh] rounded-sm border border-sky-400 text-sky-500 text-[0.6rem] flex justify-center items-center md:w-[8.5vw] md:text-[0.7rem] xl:w-[6vw]">
                  TailwindCSS
                </div>
                <div className="w-[15vw] h-[3vh] rounded-sm border border-purple-400 text-purple-500 text-[0.6rem] flex justify-center items-center md:w-[7vw] md:text-[0.7rem] xl:w-[5vw]">
                  ReactJS
                </div>
                <div className="w-[15vw] h-[3vh] rounded-sm border border-amber-400 text-amber-500 text-[0.6rem] flex justify-center items-center md:w-[7vw] md:text-[0.7rem] xl:w-[5vw]">
                  Firebase
                </div>
              </div>
              <div className="mt-[1vh] md:mt-[2vh]">
                <a
                  href="https://firebaseauth3.netlify.app/"
                  target="_blank"
                  className="text-[0.8rem] ml-[5vw] text-white px-[2vw] bg-[#55BEF9] rounded-sm hover:bg-[#a2d2ee] md:ml-[2vw] md:px-[1.5vw] md:py-[0.6vh]"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/RohendoJ/firebase-auth"
                  target="_blank"
                  className="ml-[2vw] text-[0.7rem] underline md:text-[0.8rem] xl:ml-[1vw]"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[5vh] pb-[5vh] md:pb-0">
            <div className="border border-slate-400 rounded-md w-[70vw] h-[40vh] bg-[#F2FCFF] overflow-hidden md:w-[30vw] md:h-[40vh] lg:h-[47vh] xl:w-[25vw]">
              <img
                src={projectTwo}
                alt="project1"
                className="object-cover w-full h-[50%] "
              />
              <h1 className="font-extrabold ml-[5vw] mt-[1vh] md:ml-[2vw]">
                My Library
              </h1>
              <p className="text-[0.6rem] ml-[5vw] md:ml-[2vw] md:text-[0.8rem]">
                web library with crud implementation.
              </p>
              <div className="flex gap-[2vw] ml-[5vw] mt-[1vh] md:ml-[2vw] md:gap-[1vw]">
                <div className="w-[20vw] h-[3vh] rounded-sm border border-sky-400 text-sky-500 text-[0.6rem] flex justify-center items-center md:w-[8.5vw] md:text-[0.7rem] xl:w-[6vw]">
                  TailwindCSS
                </div>
                <div className="w-[15vw] h-[3vh] rounded-sm border border-purple-400 text-purple-500 text-[0.6rem] flex justify-center items-center md:w-[7vw] md:text-[0.7rem] xl:w-[5vw]">
                  ReactJS
                </div>
                <div className="w-[15vw] h-[3vh] rounded-sm border border-amber-400 text-amber-500 text-[0.6rem] flex justify-center items-center md:w-[7vw] md:text-[0.7rem] xl:w-[5vw]">
                  Firebase
                </div>
              </div>
              <div className="mt-[1vh] md:mt-[2vh]">
                <a
                  href="https://react-crud-32272.web.app/"
                  target="_blank"
                  className="text-[0.8rem] ml-[5vw] text-white px-[2vw] bg-[#55BEF9] rounded-sm hover:bg-[#a2d2ee] md:ml-[2vw] md:px-[1.5vw] md:py-[0.6vh]"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/RohendoJ/firebase-crud"
                  target="_blank"
                  className="ml-[2vw] text-[0.7rem] underline md:text-[0.8rem] xl:ml-[1vw]"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
