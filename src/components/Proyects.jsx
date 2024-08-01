import { Fade } from 'react-awesome-reveal'
import data from '../data/projects.json'

const Proyects = () => {

    return (
        <article className="mt-16" id='proyects'>
            <h3 className="text-customBlack ssm:text-xl lg:text-2xl font-semibold mb-4">proyectos</h3>
            <div>
                {data.map((item) => (
                    <Fade key={item.id} cascade damping={0.5} delay={100}>
                        <section className='bg-customBlack text-customWhite my-8 py-8 px-7 hover:bg-customWhite hover:text-customBlack transition-all duration-200 border hover:border-customBlack'>
                            <h3 className='text-[1.1em] font-semibold'>{item.title}</h3>
                            <p className='font-light text-[1em] my-5 lg:text-[1.1em]'>{item.description}</p>
                            <div className='mt-10 flex justify-between items-center'>
                                <div className='lg:flex lg:gap-4'>
                                    <div className='font-light text-[1em]'>{item.scripts.framework}</div>
                                    <div className='font-light text-[1em]'>{item.scripts.FrameworkCSS}</div>
                                    <div className='font-light text-[1em]'>{item.scripts.FrameworkUI}</div>
                                    <div className='font-light text-[1em]'>{item.scripts.database}</div>
                                    <div className='font-light text-[1em]'>{item.scripts.backend}</div>
                                </div>
                                <div className='flex flex-col gap-y-3 lg:flex lg:flex-row lg:gap-4'>
                                    <a className='border px-3 py-2 hover:text-customBlackLight hover:border-customBlackLight transition-all duration-100' target='blank' href={item.urlGitHub}>GitHub</a>
                                    {item.urlPrewiew ? <a className='border px-3 py-2 hover:text-customBlackLight hover:border-customBlackLight transition-all duration-100' target='blank' href={item.urlPrewiew}>Preview</a> : ''
                                    }
                                </div>
                            </div>
                        </section>
                    </Fade>
                ))}
            </div>
        </article>
    )
}

export default Proyects