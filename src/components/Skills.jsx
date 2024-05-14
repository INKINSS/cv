
const Skills = () => {

    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'Librerías React', 'Git', 'GitHub', 'FrameworksUI', 'Diseño']

    return (
        <section>
            <h3 className="text-customBlack ssm:text-xl lg:text-2xl font-semibold mb-4">Habilidades</h3>
            <section className="flex flex-wrap">
                {skills.map((skill) => (
                    <div className="bg-customBlack text-customWhite hover:text-customBlack hover:bg-customWhite border border-customBlack transition-all duration-200 px-3 py-2 mr-3 my-2 text-[1em]" key={skill}>{skill}</div>
                ))}
            </section>
        </section>
    )
}

export default Skills