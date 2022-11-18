import baseURL from '../../util/axios';

const getTopBrands = () => async (dispatch) => {
  const response = await baseURL.get('/brands');
  return dispatch({
    type: 'GET_TOP_BRANDS',
    payload: response.data.brands
  });
};

export default getTopBrands;
