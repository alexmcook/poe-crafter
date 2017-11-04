export type Action = DefaultAction | EssenceAction | MouseAction;

export type DefaultAction = {
  type: string;
  payload: string;
};

export type EssenceAction = {
  type: string;
  payload: { essence: string, tier: number };
};

export type MouseAction = {
  type: string;
  payload: { x: number; y: number };
};
