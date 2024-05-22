
const BackInitial = () => {
    const handleMenuItemClick = (sectionId, event) => {
        event.preventDefault();

        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer className="flex justify-center items-center my-16 w-full z-50">
            <a className="inline-block underline cursor-pointer text-customBlack hover:text-customBlackLight transition-all duration-200" onClick={(event) => { handleMenuItemClick("banner", event) }}>volver al inicio</a>
        </footer>
    );
}

export default BackInitial;
