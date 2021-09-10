import React from "react";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PizzeriasCount = (props) => {
    return (
        <StyledButtonContainer>
            <div>Количество открытых пиццерий:{props.countPizza}</div>;
        </StyledButtonContainer>
    )
};
