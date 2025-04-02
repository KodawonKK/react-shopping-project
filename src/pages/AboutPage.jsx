import React, { use } from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={goToHomepage}>Go to homepage</button>
    </div>
  );
};

export default AboutPage;
