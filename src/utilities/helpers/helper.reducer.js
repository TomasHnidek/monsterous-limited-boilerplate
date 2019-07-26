export function createReducer(initialState) {
  return reducerMap => (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
  };
}

// inspired by https://github.com/acdlite/reduce-reducers
export function reduceReducers(...items) {
  return (previous, current) => items.reduce((p, r) => r(p, current), previous);
}