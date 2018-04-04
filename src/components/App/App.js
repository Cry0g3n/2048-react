import React, { PureComponent } from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";

import Header from "../Header";
import Description from "../Description";
import GameContainer from "../GameContainer";
import { initTilesRequest } from "../../actions/tiles";
const enhance = compose(connect(null, { initTilesRequest }));

class App extends PureComponent {
  componentDidMount() {
    const { initTilesRequest } = this.props;
    initTilesRequest();
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
  margin: 80px auto 0;
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

export default enhance(App);
