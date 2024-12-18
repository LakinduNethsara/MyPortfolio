/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Cover.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {

  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Retrieve the view count from localStorage, or initialize it to 0 if it doesn't exist
    const currentViews = parseInt(localStorage.getItem("viewCount") || "0", 10);
    const newViewCount = currentViews + 1;

    // Update the view count in localStorage and the component state
    localStorage.setItem("viewCount", newViewCount);
    setViewCount(newViewCount);
  }, []);


  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-height">
      <img style={{filter:'brightness(35%)'}} className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "7rem", left: "5rem", width: "17rem", color:"white" }}>
        <h1>{name}</h1><br/>
        <h2>{title}</h2>
        <p style={{ marginTop: "1rem" }}>Views: {viewCount}</p>
      </div>

      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
      <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} onClick={scrollToAbout} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
