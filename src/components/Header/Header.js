import React, { PureComponent } from "react";
import styled from "styled-components";

class Header extends PureComponent {
  render() {
    return (
      <Container>
        <Title>{TitleText}</Title>
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

export default Header;
