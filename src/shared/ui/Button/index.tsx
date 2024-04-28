import styled from "styled-components";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export function Button({ title, onClick }: ButtonProps) {
  return <Root onClick={onClick}>{title}</Root>;
}

const Root = styled.button`
  padding: 6px;
  border-radius: 8px;
  border: none;
  width: 100%;
  height: 40px;
  cursor: pointer;
`;
