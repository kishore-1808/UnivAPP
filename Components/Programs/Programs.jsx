import React from "react";
import "./Programs.css";
import programs2 from "./programs2.jpg";
import programs4 from "./programs4.jpg";
import programs5 from "./programs5.jpg";
const Programs = () => {
  return (
    <div className="programs" id=''>
      <div className="program">
        <img src={programs2} alt="" />
        <p>Graduation Degree</p>
      </div>
      <div className="program">
        <img src={programs4} alt="" />
        <p>Master Degree</p>
      </div>
      <div className="program">
        <img src={programs5} alt="" />
        <p>Post Graduation</p>
      </div>
    </div>
  );
};

export default Programs;
