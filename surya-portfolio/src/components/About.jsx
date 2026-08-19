function About() {

    return (
        <section className="section about" id="about">

            <div className="section-badge">
                <span>01</span>
                ABOUT ME
            </div>

            <div className="section-heading">

                <h2>
                    Building
                    <span> useful things.</span>
                </h2>

                <p>
                    I focus on turning business requirements and data
                    into reliable software systems and practical
                    machine learning solutions.
                </p>

            </div>


            <div className="about-grid">

                <div className="about-main">

                    <p>
                        I'm a Software Engineer with 2+ years of
                        experience working on enterprise ERP
                        applications and backend services.
                    </p>

                    <p>
                        My core development stack includes Java,
                        Python, FastAPI, REST APIs, SQL and React.
                        I also work with machine learning workflows
                        involving data preprocessing, EDA, model
                        training and evaluation.
                    </p>

                    <p>
                        I enjoy solving real-world engineering
                        problems and building systems that are
                        reliable, maintainable and useful.
                    </p>

                </div>


                <div className="about-terminal">

                    <div className="terminal-header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="terminal-body">

                        <p>
                            <b>const</b> developer = {"{"}
                        </p>

                        <p>
                            &nbsp;&nbsp;name:
                            <em>"Surya C"</em>,
                        </p>

                        <p>
                            &nbsp;&nbsp;role:
                            <em>"Software Engineer"</em>,
                        </p>

                        <p>
                            &nbsp;&nbsp;backend:
                            <em>"Java / Python"</em>,
                        </p>

                        <p>
                            &nbsp;&nbsp;api:
                            <em>"FastAPI"</em>,
                        </p>

                        <p>
                            &nbsp;&nbsp;ai:
                            <em>"Machine Learning"</em>
                        </p>

                        <p>
                            {"}"}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;