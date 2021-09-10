import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #e17015;
  border-radius: 5px;
  color: white;
`;

export const AddPizzeriaButton = (props) => {
  return (
    <StyledButton onClick={() => props.setCountPizza(props.countPizza + 1)}>
      Добавить новую пиццерию
    </StyledButton>
  );
};
