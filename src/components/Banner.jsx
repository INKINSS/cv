import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Banner = () => {
  return (
    <Fade delay={0.5} cascade damping={0.5}>
      <section className="-z-10" id="banner">
        <h2>
          <ReactTyped
            className="font-light text-xl lg:text-[1.8em] md:text-[1.5em] tracking-[.05em] text-customBlackLight"
            strings={["Martin Samuel Perez"]}
            typeSpeed={40}
          />
        </h2>
        <h1>
          <ReactTyped
            className="font-bold text-2xl lg:text-[2.5em] md:text-[2em] lg:mt-2 tracking-[.05em] text-customBlack block"
            strings={["Desarrollador FrontEnd", "Desarrollador con React"]}
            typeSpeed={80}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input
            title="Martin Samuel Perez"
              type="text"
              className="w-full bg-customWhiteLight placeholder:text-customBlack"
            />
          </ReactTyped>
        </h1>
        <span className="text-sm lg:text-[1em] inline-block mt-2 italic text-customBlackLight">
          la creatividad se encuentra en cada linea de codigo
        </span>
        <section className="flex gap-2 mt-5">
          <a href={import.meta.env.VITE_LINKEDIN} target="blank">
            <FaLinkedin
              className="fill-customBlack hover:fill-customBlackLight transition-all duration-200"
              size={"2em"}
            />
          </a>
          <a href={import.meta.env.VITE_WHATTSAPP} target="blank">
            <FaWhatsappSquare
              className="fill-customBlack hover:fill-customBlackLight transition-all duration-200"
              size={"2em"}
            />
          </a>
          <a href={import.meta.env.VITE_GITHUB} target="blank">
            <FaGithubSquare
              className="fill-customBlack hover:fill-customBlackLight transition-all duration-200"
              size={"2em"}
            />
          </a>
          <a href={import.meta.env.VITE_FACEBOOK} target="blank">
            <FaSquareFacebook
              className="fill-customBlack hover:fill-customBlackLight transition-all duration-200"
              size={"2em"}
            />
          </a>
        </section>
      </section>
    </Fade>
  );
};

export default Banner;
