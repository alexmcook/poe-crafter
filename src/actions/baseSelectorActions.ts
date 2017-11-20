export const selectBase = (value: string) => ({
  type: 'SELECT_BASE',
  payload: value
});

export const setLevel = (value: number) => ({
  type: 'SET_LEVEL',
  payload: value
});