import React, { PureComponent } from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";

import Header from "../Header";
import Description from "../Description";
import GameContainer from "../GameContainer";
import {
  initTilesRequest,
  moveTilesRequest,
  populateFieldRequest,
  updateTilesRequest
} from "../../actions/tiles";
import { directions } from "../../logic/moveTiles";

const enhance = compose(
  connect(null, {
    initTilesRequest,
    moveTilesRequest,
    updateTilesRequest,
    populateFieldRequest
  })
);

class App extends PureComponent {
  mapKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyS: directions.DOWN,
    KeyD: directions.RIGHT,
    KeyW: directions.UP
  };

  handleKeyPress = async e => {
    const keyCode = e.code;
    if (["KeyA", "KeyS", "KeyD", "KeyW"].includes(keyCode)) {
      const {
        moveTilesRequest,
        updateTilesRequest,
        populateFieldRequest
      } = this.props;
      moveTilesRequest({
        direction: this.mapKeyCodeToDirection[keyCode]
      });

      await delay(100);

      updateTilesRequest();
      populateFieldRequest();
    }
  };

  componentDidMount() {
    const { initTilesRequest } = this.props;
    initTilesRequest();
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  render() {
    return (
      <MainContainer>
        <Header />
        <Description />
        <GameContainer />
        <Explanation>
          <b>HOW TO PLAY:</b> Use your <b>arrow</b> keys to move the tiles. When
          two tiles with the same number touch, they <b>merge into one!</b>
        </Explanation>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  margin: 0 auto;
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Explanation = styled.p`
  margin-top: 50px;
  text-align: justify;
  line-height: 1.65;
`;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default enhance(App);
