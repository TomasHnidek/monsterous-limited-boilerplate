// import * as types from './jobs.types';
// import { reducer } from '../../../utilities/helpers';
//
// const removePlaceholders = (list, len) => (len ? list.slice(0, -len) : list);
//
// const initialState = {
//   isLoading: false,
//   envSubdomain: null,
//   list: [],
//   activeItem: {
//     jobId: '',
//     isAutoSelected: false,
//   },
//   nextPageToken: '',
//   nextPageItemsCount: 0,
//   searchCount: 0,
//   searchParams: {
//     searchQuery: '',
//     keyword: '',
//     location: '',
//     page: 0,
//   },
//   searchMessages: {
//     pageTitle: '',
//     searchResult: '',
//     jobsFound: '',
//   },
// };
//
// export const reducers = {
//   [types.FETCH_BEGIN]: (state, { isNewSearch }) => {
//     const source = isNewSearch ? initialState : state;
//     const placeholders = new Array(source.nextPageItemsCount).fill();
//     return ({
//       ...state,
//       isLoading: true,
//       nextPageToken: source.nextPageToken,
//       nextPageItemsCount: source.nextPageItemsCount,
//       list: isNewSearch ? state.list : state.list.concat(placeholders),
//       searchCount: isNewSearch ? state.searchCount + 1 : state.searchCount,
//     });
//   },
//   [types.FETCH_FAILURE]: (state, { isNewSearch }) => ({
//     ...state,
//     isLoading: false,
//     list: isNewSearch ? state.list : removePlaceholders(state.list, state.nextPageItemsCount),
//   }),
//   [types.UPDATE_JOBS]: (state, { payload, isNewSearch }) => ({
//     ...state,
//     ...payload,
//     isLoading: false,
//     page: isNewSearch ? 1 : state.page + 1,
//     activeItem: {
//       jobId: isNewSearch
//         ? (payload.activeItem.jobId || initialState.activeItem.jobId)
//         : state.activeItem.jobId,
//       isAutoSelected: isNewSearch
//         ? initialState.activeItem.isAutoSelected
//         : state.activeItem.isAutoSelected,
//     },
//     list: isNewSearch
//       ? payload.list
//       : removePlaceholders(state.list, state.nextPageItemsCount).concat(payload.list),
//   }),
// };
//
// export default reducer.createReducer(initialState)(reducers);