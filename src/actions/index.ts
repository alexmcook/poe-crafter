export type Action = {
  type: string;
};

export const chaos = () => ({
  type: 'CHAOS'
});

export const remove = () => ({
  type: 'REMOVE'
});