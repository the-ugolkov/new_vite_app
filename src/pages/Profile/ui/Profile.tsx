import styled from "styled-components";
import { Header } from "./Header";
import { $userName } from "src/entities/user/model";
import { reflect } from "@effector/reflect";

interface ProfileProps {
  userName: string;
}

function ProfileView({ userName }: ProfileProps) {
  return (
    <Root>
      <Header />

      <Content>Профиль {userName}</Content>
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

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Profile = reflect({
  view: ProfileView,
  bind: {
    userName: $userName,
  },
});
