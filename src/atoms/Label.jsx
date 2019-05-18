import React from "react";
import Color from "../data/Color";

import RotateContext from "../context/RotateContext";

const Label = ({ label, size, length, fixed }) => {
  let fontSize = label.length > 2 ? 20 : 30;
  if (label.length > 8) {
    fontSize = 18;
  }
  if (label.length > 12) {
    fontSize = 16;
  }
  if (label.length > 16) {
    fontSize = 12;
  }

  if(size !== undefined) {
    fontSize = size;
  }

  return (
    <RotateContext.Consumer>
      {rotation => (
        <Color>
          {(c,t,s,p) => (
            <text
              transform={fixed ? null : `rotate(-${rotation})`}
              fill={p("black")}
              fontFamily="Libre Baskerville"
              fontWeight="bold"
              fontSize={0.8*fontSize}
              dominantBaseline="central"
              textAnchor="middle"
              textLength={length}
              lengthAdjust="spacingAndGlyphs"
              x="0"
              y="0"
            >
              {label}
            </text>
          )}
        </Color>
      )}
    </RotateContext.Consumer>
  );
};

export default Label;
