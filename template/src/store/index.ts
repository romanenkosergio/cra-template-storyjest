import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import counter from './slices/counter';
import {usersApi} from 'services';

export const store = configureStore({
    reducer: {
        counter,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
// @ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

