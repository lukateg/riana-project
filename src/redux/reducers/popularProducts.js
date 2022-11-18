// eslint-disable-next-line default-param-last
export default function popularProducts(state = [], action) {
  switch (action.type) {
    case 'GET_POPULAR_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
}
