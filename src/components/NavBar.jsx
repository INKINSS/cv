import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const handleClick = () => {
        setMenu(!menu);
    };

    const handleMenuItemClick = (sectionId, event) => {
        event.preventDefault();
        setMenu(false);

        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className="flex justify-between w-full absolute lg:justify-center">
            <nav className={`${menu ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 px-9 transition-all duration-300 ease-in-out ssm:w-1/2 md:w-1/3 lg:w-full h-screen lg:h-20 pb-5 ssm:fixed lg:relative ssm:bg-customWhiteLight lg:bg-transparent ssm:shadow-lg lg:shadow-none`}>
                <ul className="sm:flex-col lg:flex lg:flex-row lg:gap-8 lg:translate-y-4 w-full ssm:h-screen lg:h-10 justify-center">
                    <li className="ssm:pt-16 lg:pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#banner" onClick={(event) => { handleMenuItemClick("banner", event) }}>inicio</a></li>
                    <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#mimundo" onClick={(event) => { handleMenuItemClick("mimundo", event) }}>mi mundo</a></li>
                    <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#proyects" onClick={(event) => { handleMenuItemClick("proyects", event) }}>proyectos</a></li>
                    <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#skills" onClick={(event) => { handleMenuItemClick("skills", event) }}>habilidades</a></li>
                </ul>
            </nav>
            <RiArrowLeftSLine className={` ${menu ? 'rotate-180 fixed' : ' absolute rotate-0'} mx-6 my-4 transition-all duration-300 ease-in-out lg:hidden left-0 fill-customBlack`} size={'2.1em'} onClick={handleClick} />
        </header>
    );
}

export default NavBar;
