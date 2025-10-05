// import React from "react";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Blog from "./components/Blog";
// import Contact from "./components/Contact";
// import "./index.css";

// const App = () => {
//   return (
//     <div className="app">
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Blog />
//       <Contact />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Resume";
import Contact from "./components/Contact";
import "./index.css";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Navbar (optional later) */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-white text-sm">
        © {new Date().getFullYear()} Sachin Singh Chauhan | All Rights Reserved
      </footer>
    </div>
  );
};

export default App;