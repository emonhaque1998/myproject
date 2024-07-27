import { configureStore } from "@reduxjs/toolkit";
import envSlice from "./features/envSlice";
import themeModeSlice from "./features/themeModeSlice";
// ...

export const store = configureStore({
  reducer: {
    environment: envSlice,
    theme: themeModeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
