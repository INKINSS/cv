import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";


const NavBar = () => {

    const [menu, setMenu] = useState(true)
    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <header className="flex justify-between w-full">
            <nav className={`${menu ? 'translate-x-0' : '-translate-x-full'} px-9 transition-all duration-300 ease-in-out w-1/2 h-screen pb-5`}>
                <ul className="sm:flex-col lg:flex lg:flex-row lg:gap-6 lg:translate-y-4 w-full h-full">
                    <li className="pt-5"><a href="#">inicio</a></li>
                    <li className="pt-5"><a href="#">mi mundo</a></li>
                    <li className="pt-5"><a href="#">proyectos</a></li>
                    <li className="pt-5"><a href="#">habilidades</a></li>
                </ul>
            </nav>
            <RiArrowLeftSLine className={` ${menu ? 'rotate-180' : 'rotate-0'} m-5 transition-all duration-300 ease-in-out lg:hidden`} size={'2.1em'} onClick={handleClick} />
        </header>
    )
}

export default NavBar