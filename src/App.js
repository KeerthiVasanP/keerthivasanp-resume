import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialMedia from "./components/SocialMedia";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Contact />
      <SocialMedia />
    </div>
  );
}

export default App;
