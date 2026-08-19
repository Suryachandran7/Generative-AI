import {
    FaArrowRight,
    FaDownload,
    FaCode,
    FaBrain,
    FaServer
} from "react-icons/fa";

function Hero() {

    return (
        <section className="hero" id="home">

            <div className="hero-content">

                <div className="hero-label">
                    <span></span>
                    HEY THERE, I AM
                </div>

                <h1>
                    SURYA <strong>C.</strong>
                </h1>

                <div className="hero-role">
                    &lt; SOFTWARE ENGINEER /&gt;
                </div>

                <p className="hero-description">
                    Java backend engineer building enterprise systems,
                    REST APIs and intelligent applications with Python,
                    FastAPI and Machine Learning.
                </p>

                <div className="hero-buttons">

                    <a
                        href="#projects"
                        className="primary-button"
                    >
                        View Projects
                        <FaArrowRight />
                    </a>

                    <a
                        href="#contact"
                        className="secondary-button"
                    >
                        Contact Me
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="download-button"
                    >
                        <FaDownload />
                    </a>

                </div>

                <div className="hero-tech">

                    <span>JAVA</span>
                    <i>•</i>
                    <span>PYTHON</span>
                    <i>•</i>
                    <span>FASTAPI</span>
                    <i>•</i>
                    <span>ML</span>

                </div>

            </div>


            {/* FUTURISTIC AI VISUAL */}

            <div className="hero-visual">

                <div className="visual-grid"></div>

                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="orbit orbit-three"></div>

                <div className="core-glow"></div>

                <div className="ai-core">

                    <div className="core-inner">
                        SC
                    </div>

                </div>

                <div className="core-label">
                    <span>AI ENGINE</span>
                    <strong>ONLINE</strong>
                </div>


                <div className="floating-node node-one">
                    <FaCode />
                    <span>JAVA</span>
                </div>

                <div className="floating-node node-two">
                    <FaBrain />
                    <span>ML</span>
                </div>

                <div className="floating-node node-three">
                    <FaServer />
                    <span>API</span>
                </div>


                <div className="code-float code-one">
                    model.predict()
                </div>

                <div className="code-float code-two">
                    api.status = 200
                </div>

                <div className="code-float code-three">
                    System.out.println();
                </div>

            </div>

        </section>
    );
}

export default Hero;