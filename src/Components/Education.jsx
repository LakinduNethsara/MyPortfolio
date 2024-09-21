import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education" style={{backgroundColor:"rgba(14,26,88,0.9)"}}>

      <h2 style={{ textAlign: "center",color: "white" }}>Education</h2>

      {/* grid of 4 education cells */}
      <div style={{ padding: "3rem" }}>

        <div style={{ display: "grid", gap: "16px" }}>

          <div className="cell" style={{ backgroundColor: "rgba(255,255,255,1)", padding: "16px" }}>
            <h3>University of Ruhuna</h3>
            <p>Bachelor of Information Communication Technology (Hons)</p>
            <p>2021 - 2026</p>
          </div>

          <div className="cell" style={{ backgroundColor: "#f0f0f0", padding: "16px" }}>
            <h3>University of Ruhuna</h3>
            <p>Diploma in Information Technology</p>
            <p>2018 - 2019</p>
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default Education;
