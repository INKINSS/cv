import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Fade } from 'react-awesome-reveal'

const NavBar = () => {

    const [menu, setMenu] = useState(false)
    const handleClick = () => {
        setMenu(!menu)
    }

    const handleMenuItemClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <Fade damping={.5} delay={100}>
            <header className="flex justify-between w-full absolute lg:justify-center">
                <nav className={`${menu ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 px-9 transition-all duration-300 ease-in-out w-1/2 h-screen lg:h-20 pb-5 relative ssm:bg-customWhiteLight lg:bg-transparent ssm:shadow-lg lg:shadow-none`}>
                    <ul className="sm:flex-col lg:flex lg:flex-row lg:gap-8 lg:translate-y-4 w-full ssm:h-screen lg:h-10 justify-center">
                        <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#banner" onClick={() => { handleMenuItemClick("banner") }}>inicio</a></li>
                        <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#mimundo" onClick={() => { handleMenuItemClick("mimundo") }}>mi mundo</a></li>
                        <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#proyects" onClick={() => { handleMenuItemClick("") }}>proyectos</a></li>
                        <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#skills" onClick={() => { handleMenuItemClick("skills") }}>habilidades</a></li>
                    </ul>
                </nav>
                <RiArrowLeftSLine className={` ${menu ? 'rotate-180' : 'rotate-0'} m-5 transition-all duration-300 ease-in-out lg:hidden relative left-0 fill-customBlack`} size={'2.1em'} onClick={handleClick} />
            </header>
        </Fade>
    )
}

export default NavBar