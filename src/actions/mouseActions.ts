export const mouseMove = (e: { clientX: number, clientY: number }) => ({
  type: 'MOUSE_MOVE',
  payload: { x: e.clientX, y: e.clientY }
});

export const mouseLeave = () => ({
  type: 'MOUSE_LEAVE'
});