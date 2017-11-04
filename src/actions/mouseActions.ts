export const mouseMove = (e: { clientX: number, clientY: number }) => ({
  type: 'MOUSE_MOVE',
  payload: { x: e.clientX, y: e.clientY }
});

export const mouseLeave = () => ({
  type: 'MOUSE_LEAVE',
  payload: {}
});

export const itemRectMouseEnter = () => ({
  type: 'ITEM_RECT_MOUSE_ENTER',
  payload: {}
});

export const itemRectMouseLeave = () => ({
  type: 'ITEM_RECT_MOUSE_LEAVE',
  payload: {}
});