import { configureStore } from '@reduxjs/toolkit';

import resumeReducer from './slices/resume-slice';
import settingsReducer from './slices/settings-slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      resume: resumeReducer,
      settings: settingsReducer,
    },
  });
};

// export const store = configureStore({
//   reducer: {
//     resume: resumeReducer,
//     settings: settingsReducer,
//   },
// });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
