import { Fade } from 'react-awesome-reveal'

const MiMundo = () => {
    return (
        <Fade damping={.5} delay={100}>
            <section className="mt-16" id='mimundo'>
                <h3 className="text-customBlack ssm:text-xl lg:text-2xl font-semibold mb-4">mi mundo</h3>
                <p className="text-customBlackLight text-[1em]">Hace más de un año, descubrí mi pasión por el desarrollo web, explorando
                    las herramientas principales para crear diseños simples y funcionales que transmitan
                    ideas de manera efectiva en el ámbito digital. Creo firmemente en la importancia
                    de un <span className="text-customBlack font-bold">código limpio</span> y un <span className="text-customBlack text-bold font-bold">diseño adecuado</span> para lograr este propósito.</p>
            </section>
        </Fade>
    )
}

export default MiMundo