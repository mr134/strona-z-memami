import { configureStore, createSlice} from '@reduxjs/toolkit';
import {memes} from './memes';
const initialState = memes;
const slice = createSlice({
    name: 'memes',
    initialState: memes,
    reducers: {
        upvote(state, action) {
            state.find((item) => item.id === action.payload).upvotes++;
        },
        downvote(state, action) {
            state.find((item) => item.id === action.payload).downvotes++;
        },

    },
});

const store = configureStore({reducer: { memes: slice.reducer }});
export const { upvote, downvote } = slice.actions;
export default store;