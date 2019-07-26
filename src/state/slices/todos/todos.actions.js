import * as types from './todos.types';

export const fetchBegin = () => ({
  type: types.TODOS_FETCH_BEGIN,
});

export const fetchFailure = (error) => ({
  type: types.TODOS_FETCH_FAILURE,
  payload: { error },
});

export const setData = (data) => {
  return {
    type: types.UPDATE_TODOS,
    payload: data,
  };
};