/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about2.jpg";
import arrowSvg from "../images/down-arrow.svg";
const imageAltText = "Image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Welcome to my portfolio! I’m an undergraduate at the Faculty of Technology, University of Ruhuna, pursuing a Bachelor of Information and Communication Technology degree. I’m passionate about full stack development and creating innovative solutions through technology. Explore my projects, experience, and skills as I continue to push the boundaries of software development and design. Let's build something amazing together!";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Development",
  "Desktop Application Development",
  "Frontend Development",
  "Backend Development",
  "Database Management",
  "UI/UX Design",
  "Version Control",

];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my programming experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {

  const scrollToEducation = () => {
    const aboutSection = document.querySelector("#education");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="padding" id="about">
      <img style={{ filter: 'brightness(65%)' }} className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          width: "70%",
          padding: "3rem",
          marginTop: "1rem",
          margin: "3rem auto",
          textAlign: "center",
          color:"Black"
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
      <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} onClick={scrollToEducation} alt={imageAltText} />
      </div>
    </section>
  );
};

export default About;
