import React from "react";
import "styles/main.scss";

import Footer from "./component/Footer";
import LandingSection from "./sections/landingSection";
import TestimonialSection from "./sections/testimonialSection";
import ContentSection from "./sections/contentSection";
import BlogSection from "./sections/blogSection";
import TeamSection from "./sections/teamSection";
import SecondBlogSection from "./sections/secondBlogSection";
import PortfolioSection from "./sections/portfolioSection";
import CommerceSection from "./sections/commerceSection";

function App() {
  return (
    <>
      <LandingSection />
      <TestimonialSection />
      <ContentSection />
      <BlogSection />
      <TeamSection />
      <SecondBlogSection />
      <PortfolioSection />
      <CommerceSection />
      <Footer />
    </>
  );
}

export default App;
