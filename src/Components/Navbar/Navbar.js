import { useRef, useEffect } from "react"
import { FaDownload, FaBars, FaMoon, FaSun } from "react-icons/fa";
import resume from "../../Assets/issai_torres_resume_late_2023.pdf"
import { useColorScheme } from "../../Hooks/useColorScheme";
import "./Navbar.css"


const Navbar = () => {
    const menuIconRef = useRef(null)
    const dropdownContentRef = useRef(null)
    const { isDark, setIsDark } = useColorScheme();
    useOutsideAlerter(dropdownContentRef)

    const toggleExpand = () => {
        var currentDisplay = dropdownContentRef.current.style.display
        if(currentDisplay === "none" || currentDisplay === "") {
            dropdownContentRef.current.style.display = "block"
            menuIconRef.current.style.filter = "brightness(130%)"
            menuIconRef.current.style.background = "var(--primary-color)"

        } else {
            dropdownContentRef.current.style.display = "none"
            menuIconRef.current.style.filter = "brightness(100%)"
        }
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target) && (event.target !== menuIconRef.current) ) {
                    dropdownContentRef.current.style.display = "none"
                    menuIconRef.current.style.filter = "brightness(100%)"
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const triggerDarkMode = () => {
        setIsDark(!isDark)

        // save darkmode settins to local storage
        const darkMode =
            window?.localStorage?.colorSchema
                ? JSON.parse(window?.localStorage?.colorSchema)
                : true
        window?.localStorage.setItem("colorScheme", JSON.stringify(!darkMode))
    }

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark])

    return (

        <div className="navbar__container">
            <div className="navbar">
                <div>
                    <h2>
                        Issai Torres
                    </h2>
                </div>
                <div className="navbar__section-links">
                    <div className="navbar__dropdown-container" onClick={() => toggleExpand()} ref={menuIconRef}>
                        <FaBars className="navbar__dropdown-icon"/>
                        <div className="navbar__dropdown-content" ref={dropdownContentRef}>
                            <a
                                className="navbar__link navbar__dropdown-link-container"
                                onClick={() => triggerDarkMode()}
                            >
                                <span className="navbar__icon">
                                    {isDark ? <FaSun /> : <FaMoon />}
                                </span>
                            </a>
                            <a className="navbar__link navbar__dropdown-link-container" href="#projects">
                                Projects
                            </a>
                            <a className="navbar__link navbar__dropdown-link-container" href="#contact">
                                Contact
                            </a>
                            <a
                                className="navbar__link navbar__dropdown-link-container"
                                href={resume}
                                download
                            >
                                Resume <span className="navbar__icon"><FaDownload/> </span>
                            </a>
                        </div>
                    </div>

                    <a
                        className="button navbar__link navbar__header-link"
                        onClick={() => triggerDarkMode()}
                    >
                        <span className="navbar__icon">
                            {isDark ? <FaSun /> : <FaMoon />}
                        </span>
                    </a>
                    <a className="button navbar__link navbar__header-link" href="#projects">
                        Projects
                    </a>
                    <a className="button navbar__link navbar__header-link" href="#contact">
                        Contact
                    </a>
                    <a
                        className="button navbar__link navbar__header-link"
                        href={resume}
                        download
                    >
                        Resume <span className="navbar__icon"><FaDownload /> </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
