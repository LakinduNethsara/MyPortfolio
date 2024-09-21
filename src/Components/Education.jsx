import React from "react";
import arrowSvg from "../images/down-arrow.svg";
const imageAltText = "Image";

const educationList = [
  {
    school: "University of Ruhuna",
    discription: "Bachelor of Information Communication Technology (Hons)",
    duration: "2021 - 2026",
  },
  {
    school: "British Way English Academy",
    discription: "Diploma in English",
    duration: "2019",
  },
  {
    school: "Mr/ Morawaka Keerthi Abeywickrama National School",
    discription: "",
    duration: "2011 - 2019",
  },
  {
    school: "Mr/ Morawaka Primary School",
    discription: "",
    duration: "2006 - 2010",
  },
];

const Education = () => {

  const scrollToPortfolio = () => {
    const aboutSection = document.querySelector("#portfolio");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="padding" id="education" style={{backgroundColor:"rgba(7,11,75,0.9)"}}>

      <h2 style={{ textAlign: "center",color: "white" }}>Education</h2>

      <div style={{ paddingLeft: "2rem",paddingRight:"2rem", paddingTop: "3rem", paddingBottom: "5rem" }}>

        <div style={{ display: "grid", gap: "16px" }}>

          {
            educationList.map((education, index) => (
              <div key={index} className="cell" style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "16px", color:"white", borderRadius:"10px"}}>
                <h3>{education.school}</h3>
                <p>{education.discription}</p>
                <p>{education.duration}</p>
              </div>
            ))
          }

        </div>
      </div>
      <div style={{ position: "absolute", bottom: "2rem", left: "50%" }}>
      <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} onClick={scrollToPortfolio} alt={imageAltText} />

      </div>
    </section>
  );
};

export default Education;
