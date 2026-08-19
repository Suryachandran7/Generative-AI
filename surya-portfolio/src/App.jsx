import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    return (
        <div className="portfolio">

            <Navbar />

            <main>
                <Hero />
                <Stats />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <Footer />

        </div>
    );
}

export default App;