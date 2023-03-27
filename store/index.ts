import { configureStore } from '@reduxjs/toolkit';

import beerDataSlice from '@store/slices/beer-slice';


export const store = configureStore({
    reducer: {
        beers: beerDataSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
