import React from "react";
import Color from "../data/Color";

const Name = ({ name, color, bgColor, path, rotation, reverse, offset, y, textLength, fontSize }) => {
  let fillColor = color || "black";
  fontSize = fontSize || 11;

  let nameNode = path ? (
    <textPath startOffset={`${offset || 50}%`}
              href={`#${path}`}
              xlinkHref={`#${path}`}>
      {name}
    </textPath>
  ) : name;

  y = y || 0;

  if(!path && reverse) {
    y += (0.75 * fontSize);
  }

  return (
    <Color>
      {(c,t,s,p) => (
        <text
          dy={y}
          transform={`rotate(${(rotation || 0) + 360})`}
          fill={p(fillColor)}
          fontFamily="Libre Baskerville"
          fontSize={fontSize || 11}
          fontWeight="regular"
          textLength={textLength}
          textAnchor="middle"
        >
          {nameNode}
        </text>
      )}
    </Color>
  );
};

export default Name;
