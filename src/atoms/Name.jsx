import React from "react";
import Color from "../data/Color";

const Name = ({ name, color, bgColor, path, rotation, reverse, offset, y, textLength, fontFamily, fontSize, fontStyle, fontWeight }) => {
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
          fill={bgColor ? t(c(bgColor)) : p(fillColor)}
          fontFamily={fontFamily || "Libre Baserville"}
          fontSize={fontSize || 11}
          fontStyle={fontStyle || "regular"}
          fontWeight={fontWeight || "bold"}
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
