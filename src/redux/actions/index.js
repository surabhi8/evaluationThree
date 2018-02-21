const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INSERTBOOK = 'INSERTBOOK';
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const insertbook = payload => ({
  type: INSERTBOOK,
  payload,
});
