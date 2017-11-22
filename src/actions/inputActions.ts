export const mouseMove = (e: { clientX: number; clientY: number }) => ({
  type: 'MOUSE_MOVE',
  payload: { x: e.clientX, y: e.clientY }
});

export const mouseLeave = () => ({
  type: 'MOUSE_LEAVE',
  payload: {}
});

export const keyUp = (key: string) => ({
  type: 'KEY_UP',
  payload: key
});

export const scroll = (scrollerPos: number, optionsPos: number) => ({
  type: 'SCROLL',
  payload: { scrollerPos: scrollerPos, optionsPos: optionsPos }
});
