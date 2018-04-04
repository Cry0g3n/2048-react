import React, { PureComponent } from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getTiles } from "../../reducers/tiles";

const enhance = compose(
  connect(
    state => ({
      tiles: getTiles(state)
    }),
    null
  )
);

class GameContainer extends PureComponent {
  render() {
    const { tiles } = this.props;

    return (
      <Wrapper>
        <GridContainer>
          {Array.from(new Array(16), (_, i) => i).map(i => (
            <BackgroundTile key={i} />
          ))}
        </GridContainer>
        <TileContainer>
          {tiles
            ? tiles.map(({ x, y, value, id }) => (
                <Tile key={id} x={x} y={y} value={value}>
                  {value}
                </Tile>
              ))
            : null}
        </TileContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 40px auto 0;
  position: relative;
  height: 450px;
  width: 450px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  height: 450px;
  width: 450px;
  position: absolute;
  background: #bbada0;
  border-radius: 10px;
  padding: 5px;
`;

const BackgroundTile = styled.div`
  margin: auto;
  background-color: rgba(238, 228, 218, 0.35);
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

const TileContainer = styled.div`
  position: absolute;
  height: 450px;
  width: 450px;
`;

const Tile = BackgroundTile.extend`
  transform: translate(${({ x }) => x * 110}px, ${({ y }) => y * 110}px);
  text-align: center;
  line-height: 100px;
  background-color: ${({ value }) => calculateBackgroundColor(value)};
  position: absolute;
  margin: 10px;
  transition-property: transform;
  transition: 100ms ease-in-out;
  color: #6a4e4e;
  font-weight: 900;
  font-size: ${({ value }) =>
    value < 100 ? 66 : value < 1000 ? 47 : value < 10000 ? 40 : 30}px;
`;

const calculateBackgroundColor = value => {
  if (value === 0) {
    return "transparent";
  }
  // from 0 to 16
  const step = Math.min(16, Math.log2(value));
  return `hsl(0, ${calculateSaturation(step)}%, ${calculateLightness(step)}%);`;
};
const calculateSaturation = step => Math.floor(100 / 16 * step);
const calculateLightness = step => 100 - Math.floor(50 / 16 * step);

export default enhance(GameContainer);
