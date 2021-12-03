import { configureStore } from '@reduxjs/toolkit';

import registerReducer from 'library/common/components/stateSlices/registerSlice';
import loginReducer from 'library/common/components/stateSlices/loginSlice';

const loggedInUserFromStorage = localStorage.getItem('loggedInUser')
  ? JSON.parse(localStorage.getItem('loggedInUser'))
  : null;
const preloadedState = {
  login: {
    loggedInUser: loggedInUserFromStorage,
  },
};

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
  preloadedState,
});
