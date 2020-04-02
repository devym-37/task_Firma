import React from "react";
import "styles/main.scss";

import Footer from "./component/Footer";
import LandingPage from "./pages/landingPage";
import CommercePage from "./pages/commercePage";

function App() {
  return (
    <>
      <LandingPage />
      <CommercePage />
      <Footer />
    </>
  );
}

export default App;
