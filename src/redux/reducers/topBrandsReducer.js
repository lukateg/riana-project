// eslint-disable-next-line default-param-last
export default function topBrandsReducer(state = [], action) {
  switch (action.type) {
    case 'GET_TOP_BRANDS':
      return action.payload;
    default:
      return state;
  }
}
