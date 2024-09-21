/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Marks Management System",
    description:
      'This project is for "Third Year Group Project" in my degree program. This is a web application that is developed for Faculty of Technology in University of Ruhuna to manage all the students marks as a replacement for the mannual marks processing workflow. There are two repositories for backend and frontend. Please reffer both the repositories to get the full idea of the project.',
    url: "https://github.com/LakinduNethsara/mms-frontend",
  },
  {
    title: "Pharmacy Management System",
    description:
      "This is a desktop application which was developed using Java programming Language and JavaFX library. This project was developed with remote medicine ordering feature and other key features to full fill the requirements of the 'Software Engineering' course module in my degree program.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Karmikaya.lk",
    description:
      'This is an e-commerce web project which was developed under the "e-commere implimentation and managment security" course modul in my degree program. We developed a new idea as an e-commerce web project. At the same time, this is a group project.',
    url: "https://github.com/LakinduNethsara/E-Commecre_Platform",
  },
  {
    title: "TECMIS",
    description:
      "I developed a mini project using OOP concepts to fulfill the requirements of the 'Object Oriented Programming' course module in my degree program.",
    url: "https://github.com/LakinduNethsara/OOP-Mini_Project",
  },
  {
    title: "Bid-Zone",
    description:
      'This is a small and lite version of an online bidding system. This project was developped as an assignment for the "Advanced Programming" course module in my degree program. There are two repositories for backend and frontend. This is a group project.',
    url: "https://github.com/LakinduNethsara/BidZone-frontend",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{backgroundColor:"rgba(0,0,0,0.1)"}}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{backgroundColor:"rgba(0,0,0,0.3)"}}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
