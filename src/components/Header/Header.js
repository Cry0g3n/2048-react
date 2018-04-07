import React, { PureComponent } from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";

import { getScore } from "../../reducers/tiles";
import Score from "../Score/Score";

const enhance = compose(
  connect(
    state => ({
      score: getScore(state)
    }),
    null
  )
);

class Header extends PureComponent {
  render() {
    const { score } = this.props;

    return (
      <Container>
        <Title>{TitleText}</Title>
        <Score value={score}/>
      </Container>
    );
  }
}

const TitleText = "2048";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin: 0;
`;

export default enhance(Header);
