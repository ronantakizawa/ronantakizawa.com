import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <StarsCanvas />
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
        <StarsCanvas />
        <About />
        <Experience />
        <Works />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
