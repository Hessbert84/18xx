import React from "react";
import { connect } from "react-redux";
import Color from "./data/Color";

const Title = ({ game, variation, hexWidth }) => {
  let scale = hexWidth / 150.0;
  let size = (game.info.titleSize || 200) * scale;
  let subSize = (game.info.subTitleSize || 30) * scale;
  let designerSize = (game.info.designerSize || 20) * scale;

  let mapName = null;
  variation = variation || 0;
  if (variation !== 0 && Array.isArray(game.map)) {
    mapName = game.map[variation].name;
  }

  let x = (game.info.titleX || 0) * scale + 50;
  let y = ((game.info.titleY || 0) + 170) * scale + 50;
  let rotate = (game.info.titleRotate || 0);

  return (
    <Color>
      {c => (
        <g
          transform={`translate(${x} ${y}) rotate(${rotate})`}
        >
          <text
            fill={c("black")}
            fontFamily="Adamina"
            fontWeight="bold"
            fontSize={0.6*size}
            textAnchor="start"
            lengthAdjust="spacingAndGlyphs"
            x="0"
            y="0"
          >
            {game.info.title}
          </text>
          {game.info.subtitle && (
            <text
              fill={c("black")}
              fontFamily="Libre Baskerville"
              fontWeight="italic"
              fontStyle="italic"
              fontSize={0.6*subSize}
              textAnchor="start"
              lengthAdjust="spacingAndGlyphs"
              x="0"
              y={subSize + 10}
            >
              {game.info.subtitle}
            </text>
          )}
          <text
            fill={c("black")}
            fontFamily="Libre Baskerville"
            fontWeight="regular"
            fontSize={0.7*designerSize}
            textAnchor="start"
            lengthAdjust="spacingAndGlyphs"
            x="0"
            y={designerSize + 10 + (game.info.subtitle ? (subSize + 10) : 0)}
          >
            {game.info.designer}
            {mapName && ` ⋯ ${mapName}`}
          </text>
        </g>
      )}
    </Color>
  );
};

const mapStateToProps = (state, {hexWidth}) => ({
  hexWidth: hexWidth || state.config.tiles.width
});
export default connect(mapStateToProps)(Title);
