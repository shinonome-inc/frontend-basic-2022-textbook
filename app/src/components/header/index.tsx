import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <header>
      <StyledWrapper>
        <StyledText>header</StyledText>
      </StyledWrapper>
    </header>
  );
};
export default Header;

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledText = styled.div``;
