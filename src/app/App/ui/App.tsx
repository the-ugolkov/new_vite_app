import { Outlet } from "react-router-dom";
import styled from "styled-components";

export function App() {
  return (
    <Root>
      <Outlet />
    </Root>
  );
}

const Root = styled.div`
  height: 100%;
`;
