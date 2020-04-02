import React from "react";
import "styles/main.scss";

import Footer from "./component/Footer";
import LandingPage from "./pages/landingPage";
import TestimonialPage from "./pages/testimonialPage";
import CommercePage from "./pages/commercePage";

function App() {
  return (
    <>
      <LandingPage />
      <TestimonialPage />
      <CommercePage />
      <Footer />
    </>
  );
}

export default App;
