import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  REMOVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_POST:
    return {
      ...state,
      currentPost: action.post,
      loading: false
    };

  case UPDATE_EMPLOYEE:
    return {
      ...state,
      posts: [...action.posts],
      loading: false
    };

  case ADD_EMPLOYEE:
    return {
      ...state,
      posts: [action.post, ...state.posts],
      loading: false
    };

  case REMOVE_EMPLOYEE:
    return {
      ...state,
      posts: state.posts.filter((post) => {
        return post._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
