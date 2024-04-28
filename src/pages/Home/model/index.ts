import axios from "axios";
import { createEffect, createStore, sample } from "effector";
import { createGate } from "effector-react";
import { Operation, OperationsResponse } from "src/shared/api/types";

export const HomeGate = createGate();

export const $operations = createStore<Operation[]>([]);

const requestOperationsFx = createEffect<void, OperationsResponse>();

requestOperationsFx.use(async () => {
  const { data } = await axios.get<OperationsResponse>(
    "http://localhost:8000/operations/"
  );
  return data;
});

sample({
  clock: requestOperationsFx.doneData,
  target: $operations,
});

sample({
  clock: HomeGate.open,
  target: requestOperationsFx,
});
