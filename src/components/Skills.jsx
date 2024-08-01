import { Fade } from 'react-awesome-reveal'

const Skills = () => {

    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'MongoDB', 'Librerías React', 'Git', 'GitHub', 'FrameworksUI', 'Diseño']

    return (
        <Fade damping={.5} delay={100}>
            <section id='skills'>
                <h3 className="text-customBlack ssm:text-xl lg:text-2xl font-semibold mb-4">Habilidades</h3>
                <section className="flex flex-wrap">
                    {skills.map((skill) => (
                        <div className="bg-customBlack text-customWhite hover:text-customBlack hover:bg-customWhite border border-customBlack transition-all duration-200 px-3 py-2 mr-3 my-2 text-[1em]" key={skill}>{skill}</div>
                    ))}
                </section>
            </section>
        </Fade>
    )
}

export default Skills