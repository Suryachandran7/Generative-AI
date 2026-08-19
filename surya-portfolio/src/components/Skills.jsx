import { useState } from "react";

import {
    FaServer,
    FaBrain,
    FaReact,
    FaDatabase
} from "react-icons/fa";

const categories = [
    {
        id: "backend",
        icon: <FaServer />,
        title: "Backend",
        skills: [
            "Java",
            "Python",
            "FastAPI",
            "REST APIs"
        ]
    },

    {
        id: "ml",
        icon: <FaBrain />,
        title: "Machine Learning",
        skills: [
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Random Forest",
            "SVM"
        ]
    },

    {
        id: "frontend",
        icon: <FaReact />,
        title: "Frontend",
        skills: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap"
        ]
    },

    {
        id: "database",
        icon: <FaDatabase />,
        title: "Database",
        skills: [
            "MariaDB",
            "MySQL",
            "PostgreSQL",
            "SQL"
        ]
    }
];

function Skills() {

    const [selectedCategory, setSelectedCategory] =
        useState("backend");

    const selected =
        categories.find(
            (category) =>
                category.id === selectedCategory
        );

    return (
        <section
            className="section skills"
            id="skills"
        >

            <div className="section-badge">
                <span>02</span>
                SKILL RADAR
            </div>


            <div className="skills-title">

                <h2>
                    My Technical
                    <span> Arsenal</span>
                </h2>

                <p>
                    Select a category to scan the technologies
                    I work with.
                </p>

            </div>


            <div className="skills-layout">

                {/* LEFT SIDE */}

                <div className="skill-categories">

                    {categories.map(
                        (category, index) => (

                            <button
                                className={
                                    `skill-category ${
                                        selectedCategory ===
                                        category.id
                                            ? "active"
                                            : ""
                                    }`
                                }

                                key={category.id}

                                onClick={() =>
                                    setSelectedCategory(
                                        category.id
                                    )
                                }
                            >

                                <div className="skill-icon">
                                    {category.icon}
                                </div>

                                <div className="skill-category-info">

                                    <small>
                                        0{index + 1}
                                    </small>

                                    <h3>
                                        {category.title}
                                    </h3>

                                    <span>
                                        {category.skills.length}
                                        {" "}signals
                                    </span>

                                </div>

                                <div className="skill-active-dot">
                                    ●
                                </div>

                            </button>

                        )
                    )}

                </div>


                {/* RIGHT SIDE */}

                <div
                    className="skill-radar"
                    key={selectedCategory}
                >

                    {/* radar circles */}

                    <div className="radar-circle circle-one"></div>

                    <div className="radar-circle circle-two"></div>

                    <div className="radar-circle circle-three"></div>


                    {/* radar lines */}

                    <div className="radar-line horizontal"></div>

                    <div className="radar-line vertical"></div>


                    {/* animated scanning light */}

                    <div className="radar-sweep"></div>


                    {/* center */}

                    <div className="radar-core">

                        <div className="radar-core-glow"></div>

                        <div className="radar-core-icon">
                            {selected.icon}
                        </div>

                    </div>


                    {/* Dynamic skills */}

                    {selected.skills.map(
                        (skill, index) => (

                            <div
                                className={
                                    `radar-skill radar-skill-${index + 1}`
                                }
                                key={skill}
                            >

                                <span></span>

                                {skill}

                            </div>

                        )
                    )}


                    {/* selected category */}

                    <div className="radar-category">

                        <small>
                            ACTIVE SCAN
                        </small>

                        <strong>
                            {selected.title}
                        </strong>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;