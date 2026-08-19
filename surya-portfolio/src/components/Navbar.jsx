import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

function Navbar() {

    return (
        <header className="navbar">

            <div className="nav-logo">
                SC<span>_</span>
            </div>

            <div className="nav-status">
                <span className="status-dot"></span>
                AVAILABLE FOR OPPORTUNITIES
            </div>

            <nav className="nav-links">

                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>

                <a
                    href="/resume.pdf"
                    className="resume-button"
                    download
                >
                    Resume
                </a>

            </nav>

            <div className="nav-social">

                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

               <a
    href="https://www.linkedin.com/in/surya-c-6b605b289/"
    target="_blank"
    rel="noreferrer"
>
                    <FaLinkedin />
                </a>

            </div>

        </header>
    );
}

export default Navbar;