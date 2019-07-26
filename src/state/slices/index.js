import {TODOS_FETCH_BEGIN, TODOS_FETCH_FAILURE, UPDATE_TODOS} from './todos/todos.types';
import {USERS_FETCH_BEGIN, USERS_FETCH_FAILURE, UPDATE_USERS, USER_FETCH_BEGIN, USER_FETCH_FAILURE, UPDATE_USER} from './users/users.types';
import * as lodash from 'lodash';
import { console } from '../../utilities/loggers'

export const defaultState = {
  users: [],
  user: {},
  todos: [],
};

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TODOS_FETCH_BEGIN: {
      console.log(action);
      let newState = lodash.cloneDeep(state);
      newState.requestInProgress = true;
      return newState;
    }

    case USERS_FETCH_BEGIN: {
      console.log(action);
      let newState = lodash.cloneDeep(state);
      newState.requestInProgress = true;
      return newState;
    }

    case USER_FETCH_BEGIN: {
      console.log(action);
      let newState = lodash.cloneDeep(state);
      newState.requestInProgress = true;
      return newState;
    }

    case UPDATE_TODOS: {
      console.log(action);
      let newState = lodash.cloneDeep(state);
      newState.todos = action.payload;
      return newState;
    }

    case UPDATE_USERS: {
      console.log(action);
      let newState = lodash.cloneDeep(state);
      newState.users = action.payload;
      return newState;
    }

    case UPDATE_USER: {
      console.log(action);
      let newState = lodash.cloneDeep(state);
      newState.user = action.payload;
      return newState;
    }

    case TODOS_FETCH_FAILURE: {
      console.log(action.payload);
      let newState = lodash.cloneDeep(state);
      newState.requestInProgress = false;
      break;
    }
    case USERS_FETCH_FAILURE: {
      console.log(action.payload);
      let newState = lodash.cloneDeep(state);
      newState.requestInProgress = false;
      break;
    }
    case USER_FETCH_FAILURE: {
      console.log(action.payload);
      let newState = lodash.cloneDeep(state);
      newState.requestInProgress = false;
      break;
    }

    default:
      return state;
  }
};

export default Reducer; 