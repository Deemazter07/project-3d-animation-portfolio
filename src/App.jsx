import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="w-full text-center items-center p-3 top-0 z-30 bg-[#623eaf]">
          <strong>
            Tutorial from{" "}
            <a
              className="underline"
              href="https://www.youtube.com/watch?v=0fYi8SGA20k&t=5s"
              target="_blank"
            >
              here.
            </a>
          </strong>
        </div>
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works />
        <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
