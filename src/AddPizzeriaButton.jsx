import React from "react";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
    background-color: #e17015;
    border-radius: 9px;
    color: white;
    height: 40px;
    width: 300px;
    font-size: 14pt;
    border: unset;
    :hover {
      transform:scale(1.05);
      transition: 3s;
    }
`;

export const AddPizzeriaButton = (props) => {
  return (
    <StyledButtonContainer>
      <StyledButton onClick={() => props.setCountPizza(props.countPizza + 1)}>
        Добавить новую пиццерию &#43;
      </StyledButton>
    </StyledButtonContainer>
  );
};
