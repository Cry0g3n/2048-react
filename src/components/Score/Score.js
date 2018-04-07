import React, { PureComponent } from "react";
import styled from "styled-components";

class Score extends PureComponent {
  render() {
    const { value } = this.props;

    return (
      <ScoreContainer>
        <Title>SCORE</Title>
        <Value>{value}</Value>
      </ScoreContainer>
    );
  }
}

const ScoreContainer = styled.div`
  position: relative;
  display: inline-block;
  background: #bbada0;
  font-size: 18px;
  height: 55px;
  line-height: 27px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  margin-top: 8px;
  text-align: center;
  padding: 0 25px;
`;

const Title = styled.p`
  font-size: 13px;
`;
const Value = styled.p``;

export default Score;
