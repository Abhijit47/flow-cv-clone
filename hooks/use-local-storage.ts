import { RootState } from '@/store';

const LOCAL_STORAGE_KEY = 'resume-state';

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.info('Error loading state from localStorage', err);
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
  } catch (error) {
    console.info('Error saving state to localStorage', error);
  }
};

export const getHasUsedAppBefore = () => Boolean(loadStateFromLocalStorage());
