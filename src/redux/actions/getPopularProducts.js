import baseURL from '../../util/axios';

const getPopularProducts = () => async (dispatch) => {
  const response = await baseURL.get('/most-popular');
  dispatch({ type: 'GET_POPULAR_PRODUCTS', payload: response.data });
};

export default getPopularProducts;
