import data from '../data/projects.json'

const Proyects = () => {
    return (
        <article className="mt-16">
            <h3 className="text-customBlack ssm:text-xl lg:text-2xl font-semibold mb-4">proyectos</h3>
            <div>
                {data.map((item) => (
                    <section className='bg-customBlack text-customWhite my-8 py-8 px-7' key={item.id}>
                        <h3 className='text-[1.1em] font-semibold text-customWhite'>{item.title}</h3>
                        <p className='font-light text-[1em] text-customWhite my-5 lg:text-[1.1em]'>{item.description}</p>
                        <div className='mt-10 flex justify-between items-center'>
                            <div className='lg:flex lg:gap-4'>
                                <div className='font-light text-[1em]'>{item.scripts.framework}</div>
                                <div className='font-light text-[1em]'>{item.scripts.FrameworkCSS}</div>
                                <div className='font-light text-[1em]'>{item.scripts.FrameworkUI}</div>
                            </div>
                            <div className='flex flex-col gap-y-3 lg:flex lg:flex-row lg:gap-4'>
                                <a className='border border-gray-50 px-3 hover:text-customBlackLight transition-all duration-100' target='blank' href={item.urlGitHub}>GitHub</a>
                                <a className='border border-gray-50 px-3 hover:text-customBlackLight transition-all duration-100' target='blank' href={item.urlPrewiew}>Preview</a>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </article>
    )
}

export default Proyects