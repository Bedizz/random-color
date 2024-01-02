import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


export default function App() {
  const [color, setColor] = useState([113, 155, 245]);
  let formattedColor = `rgb(${color.join()})`;
  const applyColor = () => {};
  applyColor();
  document.body.style.backgroundColor = formattedColor;

  const chooseColor = () => {
    const random = [];
    for (let i = 0; i < 3; i++) {

      random.push(Math.floor(Math.random() * 256));
      setColor(random);
    }
  };

  let isLight = color.reduce((a, b) => a + b) < 127 * 3;

  return (
    <div className="App">
      <div className="Instructions">
        <div className="block">
          <h1>Random Color</h1>
          <p>
            In this project, we’ll build a program that helps designers think of
            new color schemes. Our program will set the screen’s background to a
            random color. Clicking a button will refresh to a new, random
            color. Random generators are a well-known tool for breaking a
            creative rut. 
          </p>
          <Link className="link" to="/">
            Step by step instructions
          </Link>
          <Link className="link" to="https://reactjs.org/docs/hooks-state.html">
            Help
          </Link>
          <Link
            className="link"
            to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
          >
            Help
          </Link>
        </div>

        <div id="randomcolor">
          <h2 className={isLight ? 'white' : 'black'}>Your color is {formattedColor} </h2>
          <Button shuffleColor={chooseColor}  light={isLight} />
        </div>
      </div>
    </div>
  );
}
