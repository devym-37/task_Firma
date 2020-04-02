import React from "react";
import "styles/main.scss";

import Footer from "component/Footer";
import LandingPage from "pages/landingPage";
import TestimonialPage from "pages/testimonialPage";
import ContentPage from "pages/contentPage";
import CommercePage from "pages/commercePage";

function App() {
  return (
    <>
      <LandingPage />
      <TestimonialPage />
      <ContentPage />
      <CommercePage />
      <Footer />
    </>
  );
}

export default App;
