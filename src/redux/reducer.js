import allPosts from '../data/posts';
import { combineReducers } from 'redux';

const comments = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      if (!state[action.id]) {
        return { ...state, [action.id]: [action.comment] };
      } else {
        return {
          ...state,
          [action.id]: [...state[action.id], action.comment],
        };
      }

    case 'LOAD_COMMENTS':
      return action.comments;

    default:
      return state;
  }
};

const posts = (state = allPosts, action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return state.filter(post => post.id !== action.index);

    case 'ADD_POST':
      return [...state, action.post];

    case 'LOAD_POSTS':
      return action.posts;

    default:
      return state;
  }
};

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
