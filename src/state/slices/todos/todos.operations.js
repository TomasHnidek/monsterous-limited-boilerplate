import * as actions from './todos.actions';
import api from '../../../utilities/api';

export const getTodos = (id) => (dispatch) => {
  dispatch(actions.fetchBegin());
  api.getTodos(id)
    .then((result) => {
      dispatch(actions.setData(result));
    }).catch((error) => {
      dispatch(actions.fetchFailure(error));
    });
};