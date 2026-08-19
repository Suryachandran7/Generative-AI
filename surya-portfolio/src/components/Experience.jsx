const experiences = [
    {
        date: "APR 2025 — PRESENT",
        role: "Software Engineer",
        company: "Nilgiri Likemind Technologies",
        points: [
            "Enhanced TeaMS ERP functionality using Java, Python, FastAPI, REST APIs and SQL across 7 business modules.",
            "Created REST API endpoints supporting workflow integration.",
            "Processed 50,000+ structured records using Python and scikit-learn.",
            "Developed predictive models achieving 88% prediction accuracy."
        ]
    },
    {
        date: "APR 2024 — MAR 2025",
        role: "Software Developer",
        company: "Nilgiri Likemind Technologies",
        points: [
            "Maintained and extended TeaMS ERP using Java and REST APIs.",
            "Optimized complex MariaDB queries, reducing response times by approximately 30%.",
            "Supported systems with 100+ concurrent users.",
            "Developed 15+ reusable service components."
        ]
    }
];

function Experience() {

    return (
        <section
            className="section experience"
            id="experience"
        >

            <div className="section-badge">
                <span>04</span>
                JOURNEY
            </div>

            <h2>
                Work
                <span> History</span>
            </h2>


            <div className="timeline">

                {experiences.map((job, index) => (

                    <div className="timeline-item" key={job.date}>

                        <div className="timeline-dot"></div>

                        <div className="timeline-date">
                            {job.date}
                        </div>

                        <div className="timeline-card">

                            <div className="timeline-heading">

                                <div>

                                    <h3>
                                        {job.role}
                                    </h3>

                                    <h4>
                                        {job.company}
                                    </h4>

                                </div>

                                <span>
                                    0{index + 1}
                                </span>

                            </div>


                            <ul>

                                {job.points.map((point) => (

                                    <li key={point}>
                                        {point}
                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Experience;