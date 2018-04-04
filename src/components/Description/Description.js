import React, { PureComponent } from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";

import { initTilesRequest } from "../../actions/tiles";

const enhance = compose(connect(null, { initTilesRequest }));

class Description extends PureComponent {
  runNewGame = e => {
    e.preventDefault();
    const { initTilesRequest } = this.props;
    initTilesRequest();
  };

  render() {
    return (
      <Container>
        <Intro>
          Join the numbers and get to the <b>2048 tile!</b>
        </Intro>
        <Button onClick={this.runNewGame}>New Game</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Intro = styled.span``;

const Button = styled.a`
  background: #8f7a66;
  border-radius: 3px;
  padding: 0 20px;
  text-decoration: none;
  color: #f9f6f2;
  height: 40px;
  line-height: 42px;
  cursor: pointer;
  display: block;
  text-align: center;
`;

export default enhance(Description);
