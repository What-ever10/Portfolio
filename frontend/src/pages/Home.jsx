//importing all the components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <CodingProfiles />
                <Contact />
            </main>
            <Footer />
        </>//react fragment to wrap the components
    );
};

export default Home;