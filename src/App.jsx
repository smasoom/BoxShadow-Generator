import "./App.css";
import { useState } from "react";
function App() {
  const [Hori, setHori] = useState(10);
  const [Veri, setVeri] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState("rgb(203, 189, 189)");
  const [Colorbox, setColorbox] = useState("rgb(242, 115, 214)");
  const [Checkon, setCheckon] = useState(false);
  const [Darkmode, setDarkmode] = useState(false);
  return (
    <div className={Darkmode ? "App Darkmode" : "App"}>
      <div className="controls">
        <div className="nav">
          <label className="switch1">
            THEME
            <input
              type="checkbox"
              checked={Darkmode}
              onChange={() => setDarkmode(!Darkmode)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <label>horizontal length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={Hori}
          onChange={(e) => setHori(e.target.value)}
        />
        <label>verticle length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={Veri}
          onChange={(e) => setVeri(e.target.value)}
        />
        <label>blur length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={Blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <div className="color">
          <label>color</label>
          <input
            type="color"
            value={Color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="switch">
          <label>Outline</label>
          <label>
            Offset{" "}
            <input
              type="checkbox"
              checked={Checkon}
              onChange={() => setCheckon(!Checkon)}
            />
            <span className="lever"></span> inset
          </label>
        </div>
      </div>
      <div className="output">
        <div className="color">
          <label>Color of the box</label>
          <input
            type="color"
            value={Colorbox}
            onChange={(e) => setColorbox(e.target.value)}
          />
        </div>
        <div
          className="box"
          style={{
            backgroundColor: `${Colorbox}`,
            boxShadow: `${Checkon ? "inset" : ""
              } ${Hori}px ${Veri}px ${Blur}px ${Color}`,
          }}
        >
          <p>
            boxshadow: {Hori}px {Veri}px {Blur} {Color}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
