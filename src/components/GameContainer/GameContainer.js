import React, { PureComponent } from "react";
import styled from "styled-components";

class GameContainer extends PureComponent {
  render() {
    const { tiles } = this.props;

    return (
      <Wrapper>
        <GridContainer>
          {Array.from(new Array(16), (_, i) => i).map(i => (
            <BackgroundTile key={i}/>
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

const Tile = BackgroundTile.extend``;

export default GameContainer;
