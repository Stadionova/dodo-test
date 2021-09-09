import React, { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #e17015;
  border-radius: 5px;
  color: white;
`;

export const AddPizzeriaButton: FC = (props) => {
  return (
    <StyledButton onClick={props.setCountPizza}>
      Добавить новую пиццерию
    </StyledButton>
  );
};
