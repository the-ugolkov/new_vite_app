// GET /operations
export interface Operation {
  id: number;
  date: string;
  currency: string;
  amount: number;
  name: string;
  comment: string;
  category: string;
  user: string;
}

export type OperationsResponse = Operation[];

