import React from "react";
import "styles/main.scss";

import Footer from "./component/Footer";
import LandingPage from "./pages/landingPage";
import TestimonialPage from "./pages/testimonialPage";
import ContentPage from "./pages/contentPage";
import BlogPage from "./pages/blogPage";
import TeamPage from "./pages/teamPage";
import SecondBlogPage from "./pages/secondBlogPage";
import CommercePage from "./pages/commercePage";

function App() {
  return (
    <>
      <LandingPage />
      <TestimonialPage />
      <ContentPage />
      <BlogPage />
      <TeamPage />
      <SecondBlogPage />

      <CommercePage />
      <Footer />
    </>
  );
}

export default App;
