import { Fade } from 'react-awesome-reveal'

const Banner = () => {
    return (
        <Fade delay={.5} cascade damping={.5}>
            <section className="-z-10" id='banner'>
                <h2 className="font-light text-xl lg:text-[1.8em] md:text-[1.5em] tracking-[.05em] text-customBlackLight">Martin Samuel Perez</h2>
                <h1 className="font-bold text-2xl lg:text-[2.5em] md:text-[2em] lg:mt-2 tracking-[.05em] text-customBlack">Estudiante FrontEnd</h1>
                <span className="text-sm lg:text-[1em] inline-block mt-2 italic text-customBlackLight">la creatividad se encuentra en cada linea de codigo</span>
            </section>
        </Fade>
    )
}

export default Banner