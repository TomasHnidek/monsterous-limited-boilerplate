import * as types from './users.types';

export const fetchBegin = () => ({
  type: types.USERS_FETCH_BEGIN,
});

export const fetchFailure = (error) => ({
  type: types.USERS_FETCH_FAILURE,
  payload: { error },
});

export const setData = (data) => {
  return {
    type: types.UPDATE_USERS,
    payload: data,
  };
};

export const singleFetchBegin = () => ({
  type: types.USER_FETCH_BEGIN,
});

export const singleFetchFailure = (error) => ({
  type: types.USER_FETCH_FAILURE,
  payload: { error },
});

export const setSingleData = (data) => {
  return {
    type: types.UPDATE_USER,
    payload: data,
  };
};