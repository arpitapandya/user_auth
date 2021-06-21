import { BASE_URL } from 'config/apiConfig';
import axios from 'axios';

const request = ({ path, successAction, failureAction, opts = {} }) => {
  return dispatch => {
    axios({
      url: `${BASE_URL}/${path}`,
      ...opts,
      headers: {
        authorization: localStorage.getItem('taskerToken'),
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        dispatch(successAction(res.data));
      })
      .catch(error => {
        dispatch(failureAction(error.response.data.error || error));
      });
  };
};

export default request;
