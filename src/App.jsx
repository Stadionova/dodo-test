import React from "react";
import styled from "styled-components";

import { Task1 } from "./Task1";
import { Task2 } from "./Task2";

const AppStyled = styled.div`
  font-family: sans-serif;
`;

export default function App() {
  return (
    <AppStyled>
      <Task1 />
      <hr />
      <Task2 />
    </AppStyled>
  );
}
