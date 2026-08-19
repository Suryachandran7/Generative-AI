import {
    FaExternalLinkAlt,
    FaGithub
} from "react-icons/fa";

const projects = [
    {
        number: "01",
        title: "TeaMS ERP",
        category: "ENTERPRISE ERP",
        description:
            "Enterprise ERP platform supporting Production, Inventory, Sales, Payroll, HR, Maintenance and Finance workflows.",
        technologies: [
            "JAVA",
            "REST API",
            "MARIADB",
            "OFBIZ"
        ],
        impact: "07 BUSINESS MODULES"
    },
    {
        number: "02",
        title: "ML Prediction System",
        category: "MACHINE LEARNING",
        description:
            "Machine learning workflow covering data preprocessing, EDA, feature scaling, model training and evaluation.",
        technologies: [
            "PYTHON",
            "PANDAS",
            "NUMPY",
            "SCIKIT-LEARN"
        ],
        impact: "88% ACCURACY"
    },
    {
        number: "03",
        title: "FastAPI Backend",
        category: "BACKEND / AI",
        description:
            "REST API architecture for backend services and machine learning application integration.",
        technologies: [
            "PYTHON",
            "FASTAPI",
            "REST",
            "SQL"
        ],
        impact: "API DEVELOPMENT"
    }
];

function Projects() {

    return (
        <section className="section projects" id="projects">

            <div className="section-badge">
                <span>03</span>
                FEATURED WORK
            </div>

            <div className="projects-title">

                <h2>
                    Latest
                    <span> Innovations</span>
                </h2>

                <p>
                    A selection of engineering work,
                    backend systems and machine learning projects.
                </p>

            </div>


            <div className="projects-grid">

                {projects.map((project) => (

                    <article
                        className="project-card"
                        key={project.number}
                    >

                        <div className="project-visual">

                            <div className="project-number">
                                {project.number}
                            </div>

                            <div className="project-orb">
                                <span></span>
                            </div>

                            <div className="project-lines"></div>

                        </div>


                        <div className="project-content">

                            <small>
                                {project.category}
                            </small>

                            <h3>
                                {project.title}
                            </h3>

                            <p>
                                {project.description}
                            </p>


                            <div className="project-tags">

                                {project.technologies.map(
                                    (tech) => (
                                        <span key={tech}>
                                            {tech}
                                        </span>
                                    )
                                )}

                            </div>


                            <div className="project-footer">

                                <strong>
                                    {project.impact}
                                </strong>

                                <div>

                                    <button>
                                        <FaExternalLinkAlt />
                                    </button>

                                    <button>
                                        <FaGithub />
                                    </button>

                                </div>

                            </div>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default Projects;