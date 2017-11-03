export type Action = {
  type: string;
  payload?: string;
};

export type MouseAction = {
  type: string;
  payload?: { x: number; y: number };
};
