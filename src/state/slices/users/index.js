// import * as actions from './users.actions';
import * as operations from './users.operations';

const usersOperations = {
  getUsers: operations.getUsers,
  getUser: operations.getUser,
};

export { usersOperations };