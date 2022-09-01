import "./styles.css";
import React, { useState } from "react";
let dici = {
  "😳": "shocked",
  "😔": "sad",
  "🎃": "Halloween",
  "😊": " Smiling Face with Smiling Eyes",
  "🙃": "Upside-Down Face",
  "😇": "Smiling Face with Halo",
  "💫": "Dizzy",
  "😑": "Expressionless Face",
  "😵": "Face with Crossed-Out Eyes",
  "🥳": "Partying Face",
  "😕": "Confused Face",
  "☮️": "Peace Symbol"
};
var convrtedArr = Object.keys(dici);

export default function App() {
  const [val, setVal] = useState("Tranlations will appear here..");
  function detectinp(e) {
    if (e.target.value in dici) {
      // document.write(dici[e.target.value]);
      setVal(dici[e.target.value]);
    } else {
      setVal("We currently don't have this in our database:(");
    }
  }
  function emojiclickHandler(emoji) {
    var value = dici[emoji];
    setVal(value);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "25px" }}>Get your favourite emoji's meaning</h1>

      <input
        onChange={detectinp}
        type="text"
        placeholder="Kindly paste your emoji here"
      />

      <h1>{val}</h1>

      <ul>
        {convrtedArr.map((item) => {
          return (
            <span
              style={{
                paddingRight: "2 rem",
                paddingLeft: "2rem",
                fontSize: "25px",
                cursor: "pointer"
              }}
              key={item}
              onClick={() => emojiclickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
