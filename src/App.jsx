import Header from "./components/header";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;