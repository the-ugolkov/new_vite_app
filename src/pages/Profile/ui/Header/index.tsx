import { BackButton } from "src/shared/ui/BackButton";
import styled from "styled-components";

export function Header() {
  return (
    <Root>
      <BackButton />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;
