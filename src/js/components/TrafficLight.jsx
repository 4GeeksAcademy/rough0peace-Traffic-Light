//--------------------
// 4Geeks objectives 
//--------------------

//	The light has to glow when clicked.

//    The whole purpose of the component is to display a traffic light with red, yellow and green lights.
//    When any light is clicked (selected), it has to glow, but the other lights have to stop glowing.
//    The component must have a hooked state variable that tracks the color:
//	  Use the setColor function to change the color, and the component will automatically re-render (because it's hooked with useState).


import { useState } from "react";

function TrafficLight() {
  const [selectedColor, setSelectedColor] = useState("red");

  // onClick calls the function setSelectedColor when user clicks on light
  // ex) green light
  // 1.) user clicks on green light, onClick triggers setSelectedColor
  // 2.) setSelectedColor updates state to green AND active-green class is added
  // 3.) index.css has box-shadow styling for .active-[light color] classes 
  // 4.) useState updates, remembers and rerenders with the selected color "glowing"
  
  return (
    <div className="container d-flex">
      <div className="body">
        <div
          className={
            "green-light bg-success" +
            (selectedColor === "green" ? "active-green" : "") // 
          }
          onClick={() => setSelectedColor("green")} // 
        ></div>
        <div
          className={
            "yellow-light bg-warning" +
            (selectedColor === "yellow" ? "active-yellow" : "")
          }
          onClick={() => setSelectedColor("yellow")}
        ></div>
        <div
          className={
            "red-light bg-danger" + (selectedColor === "red" ? "active-red" : "")
          }
          onClick={() => setSelectedColor("red")}
        ></div>
      </div>
    </div>
  );
}

export default TrafficLight;
