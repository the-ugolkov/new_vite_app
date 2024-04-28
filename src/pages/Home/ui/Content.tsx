import { list } from "@effector/reflect";
import styled from "styled-components";
import { $operations, HomeGate } from "../model";
import { OperationItem } from "./OperationItem";
import { useGate } from "effector-react";

export function Content() {
  useGate(HomeGate);

  return (
    <Root>
      <OperationsList />
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
`;

const OperationsList = list({
  view: OperationItem,
  source: $operations,
  mapItem: {
    item: (item) => item,
  },
  getKey: (item) => item.id,
});
