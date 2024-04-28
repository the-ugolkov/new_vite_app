import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Root onClick={goBack}>
      <svg
        width="35px"
        height="35px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#13452b"
          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        />
        <path
          fill="#13452b"
          d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        />
      </svg>
    </Root>
  );
}

const Root = styled.button`
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #2cb844;
  display: flex;
  justify-content: center;
  align-items: center;
`;
