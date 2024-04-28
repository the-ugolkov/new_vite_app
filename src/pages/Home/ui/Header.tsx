import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/shared/constants";
import styled from "styled-components";
import avatar from "src/shared/assets/icons/profile.png";
import { $userName } from "src/entities/user/model";
import { reflect } from "@effector/reflect";

interface HeaderProps {
  userName: string;
}

function HeaderView({ userName }: HeaderProps) {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(ROUTES.PROFILE);
  };

  return (
    <Root>
      <Avatar src={avatar} onClick={goToProfile} />
      <Name>{userName}</Name>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: contain;
`;

const Name = styled.span`
  align-self: flex-start;
  padding: 10px;
`;

export const Header = reflect({
  view: HeaderView,
  bind: {
    userName: $userName,
  },
});
