import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaPaperPlane
} from "react-icons/fa";

function Contact() {

    return (
        <section className="section contact" id="contact">

            <div className="section-badge">
                <span>05</span>
                CONNECT
            </div>

            <div className="contact-grid">

                <div className="contact-left">

                    <h2>
                        Let's
                        <span> Build.</span>
                    </h2>

                    <p>
                        Whether you're looking for a software
                        engineer, backend developer or someone
                        who can bridge software and machine
                        learning, let's connect.
                    </p>


                    <div className="contact-links">

                        <a href="mailto:suryachandran302001@gmail.com">

                            <div>
                                <FaEnvelope />
                            </div>

                            <span>
                                <small>EMAIL</small>
                                suryachandran302001@gmail.com
                            </span>

                        </a>


                       <a
    href="https://www.linkedin.com/in/surya-c-6b605b289/"
    target="_blank"
    rel="noreferrer"
>
                            <div>
                                <FaLinkedin />
                            </div>

                            <span>
                                <small>LINKEDIN</small>
                                LinkedIn Profile
                            </span>

                        </a>


                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >

                            <div>
                                <FaGithub />
                            </div>

                            <span>
                                <small>GITHUB</small>
                                GitHub Profile
                            </span>

                        </a>

                    </div>

                </div>


                <form
                    className="contact-form"
                    onSubmit={(e) => e.preventDefault()}
                >

                    <div className="form-row">

                        <div className="form-group">

                            <label>NAME</label>

                            <input
                                type="text"
                                placeholder="Your Name"
                            />

                        </div>


                        <div className="form-group">

                            <label>EMAIL</label>

                            <input
                                type="email"
                                placeholder="your@email.com"
                            />

                        </div>

                    </div>


                    <div className="form-group">

                        <label>MESSAGE</label>

                        <textarea
                            placeholder="Tell me about your project..."
                            rows="6"
                        />

                    </div>


                    <button className="send-button">

                        Send Message

                        <FaPaperPlane />

                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;