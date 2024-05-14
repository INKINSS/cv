import { Fade } from 'react-awesome-reveal'
import { ReactTyped } from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Banner = () => {
    return (
        <Fade delay={.5} cascade damping={.5}>
            <section className="-z-10" id='banner'>
                <ReactTyped className="font-light text-xl lg:text-[1.8em] md:text-[1.5em] tracking-[.05em] text-customBlackLight" strings={["Martin Samuel Perez"]} typeSpeed={40} />
                <ReactTyped
                    className="font-bold text-2xl lg:text-[2.5em] md:text-[2em] lg:mt-2 tracking-[.05em] text-customBlack block"
                    strings={[
                        "Estudiante FrontEnd",
                        "Estudiante de React",
                        "Estudiante DiseñoUI",
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    attr="placeholder"
                    loop
                >
                    <input type="text" className='bg-customWhiteLight placeholder:text-customBlack' />
                </ReactTyped>
                <span className="text-sm lg:text-[1em] inline-block mt-2 italic text-customBlackLight">la creatividad se encuentra en cada linea de codigo</span>
                <section className='flex gap-2 mt-5'>
                    <a href='https://www.linkedin.com/in/mart%C3%ADn-samuel-p%C3%A9rez-montenero-747690251/' target='blank'><FaLinkedin className='fill-customBlack hover:fill-customBlackLight transition-all duration-200' size={'2em'} /></a>
                    <a href='https://wa.me/50256216845?text=Hola!%20Me%20gustaría%20hablar%20contigo' target='blank'><FaWhatsappSquare className='fill-customBlack hover:fill-customBlackLight transition-all duration-200' size={'2em'} /></a>
                    <a href='https://github.com/INKINSS' target='blank'><FaGithubSquare className='fill-customBlack hover:fill-customBlackLight transition-all duration-200' size={'2em'} /></a>
                    <a href='https://www.facebook.com/profile.php?id=100001496362178&locale=es_LA' target='blank'><FaSquareFacebook className='fill-customBlack hover:fill-customBlackLight transition-all duration-200' size={'2em'} /></a>
                </section>
            </section>
        </Fade>
    )
}

export default Banner