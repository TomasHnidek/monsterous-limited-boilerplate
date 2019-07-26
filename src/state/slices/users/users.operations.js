import * as actions from './users.actions';
import api from '../../../utilities/api';

export const getUsers = () => (dispatch) => {
  dispatch(actions.fetchBegin());
  return api.getUsers()
    .then((result) => {
      dispatch(actions.setData(result));
    }).catch((error) => {
      dispatch(actions.fetchFailure(error));
    });
};

export const getUser = (id) => (dispatch) => {
  dispatch(actions.singleFetchBegin());
  return api.getUser(id)
    .then((result) => {
      dispatch(actions.setSingleData(result));
    }).catch((error) => {
      dispatch(actions.singleFetchFailure(error));
    });
};
