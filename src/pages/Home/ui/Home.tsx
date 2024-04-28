import styled from "styled-components";
import { Header } from "./Header";
import { Content } from "./Content";

export function Home() {
  return (
    <Root>
      <Header />
      <Content />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;
