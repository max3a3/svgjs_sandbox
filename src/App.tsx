import { useEffect, useState, useRef } from "react";
import {
  SVG,
  extend as SVGextend,
  Element as SVGElement
} from "@svgdotjs/svg.js";

import "./styles.css";
function ColorPicker() {
  let [color, setColor] = useState("#ff0000");
  const colorChange = (evt) => {
    setColor(evt.target.value);
  };
  return (
    <div>
      <input
        type="color"
        id="head"
        name="head"
        value={color}
        onChange={colorChange}
      />
      <label htmlFor="head">Head2</label>
    </div>
  );
}
/*
.size('100%', '100%')
*/

function SVGTEST() {
  let containerRef = useRef(null);
  useEffect(() => {
    var draw = SVG()
      .addTo(containerRef.current)
      .size("100%", "100%")
      .fill("green");
    var rect = draw.rect(100, 100).attr({ fill: "#ff3" });
    return () => draw.remove();
  }, []);

  return <div ref={containerRef}>test</div>;
}
function SVGTEST2() {
  let containerRef = useRef(null);
  let [rootSvg, setRootSvg] = useState(null);
  let [rectSvg, setRectSvg] = useState(null);
  useEffect(() => {
    var draw = SVG().addTo(containerRef.current).size(400, 300).fill("#ff0");
    var rect = draw.rect(100, 100).attr({ fill: "#3f3" });
    setRootSvg(draw);
    setRectSvg(rect);
    return () => draw.remove();
  }, []);
  let resizeSvg = () => {
    console.log(rootSvg.attr());
    console.log(rectSvg.attr());
    debugger;
  };
  return (
    <div>
      svgtest2
      <button onClick={resizeSvg}>resize</button>
      <hr />
      <div ref={containerRef}></div>
    </div>
  );
}
function TestFlex() {
  return <div className="flex h-full bg-red-700">flexrtest</div>;
}
export default function App() {
  return (
    <div>
      <ColorPicker />
      {/* <SVGTEST /> */}
      <SVGTEST2 />
      {/* <TestFlex /> */}
    </div>
  );
}
