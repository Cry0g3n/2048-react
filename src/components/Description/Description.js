import React, { PureComponent } from "react";
import styled from "styled-components";

class Description extends PureComponent {
  handleClick = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <Intro>
          Join the numbers and get to the <b>2048 tile!</b>
        </Intro>
        <Button onClick={this.handleClick}>New Game</Button>
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

export default Description;
