import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import { Button } from "src/shared/ui/Button";
import styled from "styled-components";

export function Error404() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Root>
      <Title>ErrorPage</Title>

      <Button onClick={goToHomePage} title="Вернуться на главную" />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 20px;
  padding: 20px;
`;

const Title = styled.span``;
