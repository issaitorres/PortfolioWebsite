import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import ProjectGrid from "./Components/ProjectGrid/ProjectGrid";
import Contact from "./Components/Contact/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <About />
        <ProjectGrid />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
