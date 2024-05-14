import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";


const NavBar = () => {

    const [menu, setMenu] = useState(false)
    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <header className="flex justify-between w-full absolute lg:justify-center">
            <nav className={`${menu ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 px-9 transition-all duration-300 ease-in-out w-1/2 h-screen lg:h-20 pb-5 relative ssm:bg-customWhiteLight lg:bg-transparent`}>
                <ul className="sm:flex-col lg:flex lg:flex-row lg:gap-6 lg:translate-y-4 w-full h-full justify-center">
                    <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#">inicio</a></li>
                    <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#">mi mundo</a></li>
                    <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#">proyectos</a></li>
                    <li className="pt-5"><a className="hover:text-customBlackLight transition duration-200 text-customBlack" href="#">habilidades</a></li>
                </ul>
            </nav>
            <RiArrowLeftSLine className={` ${menu ? 'rotate-180' : 'rotate-0'} m-5 transition-all duration-300 ease-in-out lg:hidden relative left-0 fill-customBlack`} size={'2.1em'} onClick={handleClick} />
        </header>
    )
}

export default NavBar