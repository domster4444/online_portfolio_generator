import { configureStore } from '@reduxjs/toolkit';

import registerReducer from 'library/common/components/stateSlices/registerSlice';
import loginReducer from 'library/common/components/stateSlices/loginSlice';

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});
