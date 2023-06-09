import { lazy, useEffect } from "react";
import profile from "../../assets/img/profile.png";

const Navbar = lazy(() => import("../../components/navbar"));

const Home = () => {
  const downloadLink = () => {
    window.open(
      "https://drive.google.com/file/d/1Yng8xlC9I-Ab0cWKvdehZN7rph2vjeiy/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar styleHome="text-[#0A9EF1]" />
      <div className="md:flex md:mt-[20vh] lg:mt-[10vh]">
        <div
          className="flex justify-center order-last lg:mr-[15vw] lg:mt-[5vh]"
          data-aos="fade-left"
          dat-once="true"
        >
          <img src={profile} alt="me" className="w-[80vw] object-cover" />
        </div>
        <div className="lg:mt-[10vh] lg:ml-[5vw]">
          <div className="flex justify-center items-center mt-[2vh] md:ml-[10vw]">
            <h1 className="text-[rgb(1,4,72)] text-center font-extrabold text-[1.7rem] w-[80vw] md:text-left md:text-[1.5rem] md:w-[50vw] lg:text-[2.3rem]">
              Hi! I Am <br />
              Rohendo Junaedin
            </h1>
          </div>
          <div className="grid place-items-center mt-[1vh] xl:mr-[10vw]">
            <p className="text-center w-[70vw] text-slate-700 md:text-left md:w-[40vw] xl:w-[30vw]">
              Student are interested in software development, especially web
              development.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-[2vh] md:flex-row md:gap-[2vw] lg:justify-start lg:ml-[10vw] xl:gap-[1.5vw]">
            <button
              className="bg-[#4079E8] text-white px-[2vw] py-[1vh] rounded-md hover:bg-[#bdd1fa] hover:text-blue-700"
              onClick={downloadLink}
            >
              Download CV
            </button>
            <div className="flex gap-[2vw] mt-[3vh] md:mt-0 xl:gap-[1vw]">
              <a
                href="https://www.linkedin.com/in/rohendo-junaedin/"
                target="_blank"
                className="underline font-bold text-[#4079E8] hover:text-[#1556d6]"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/RohendoJ"
                target="_blank"
                className="underline font-bold text-[#16294D] hover:text-black"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
