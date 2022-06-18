const INITIAL_USER = {
  listProducts: [],
};

export default function list(state = INITIAL_USER, action) {
  switch (action.type) {
  case 'PUSH_PROD':
    return {
      ...state,
      listProducts: [...state.listProducts, action.state] };
  default:
    return state;
  }
}