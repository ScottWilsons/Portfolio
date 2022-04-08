import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import css from "./style.module.css";

const contentStyle = {
  borderRadius: 100,
  height: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Projects() {
  return (
    <div className={css.projectContainer}>
      <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;

// ReactDOM.render(
//   <Carousel autoplay>
//     <div>
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>,
//   mountNode,
// );
