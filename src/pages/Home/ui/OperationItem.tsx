import styled from "styled-components";
import { Operation } from "src/shared/api/types";

interface OperationItemProps {
  item: Operation;
}

export function OperationItem({ item }: OperationItemProps) {
  return <Root>{item.name}</Root>;
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
