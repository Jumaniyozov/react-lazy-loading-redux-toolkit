import {createAsyncThunk} from "@reduxjs/toolkit";

const {createSlice} = require("@reduxjs/toolkit");

export const getAllPosts = state => state.posts.posts;
export const getPostStates = state => state.posts;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, {rejectWithValue}) => {
    try {
        const posts = await fetch("https://fakestoreapi.com/products");
        const data = posts.json();
        if (!posts.ok) {
            // noinspection ExceptionCaughtLocallyJS
            throw new Error("error during fetching");
        }
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        partialPosts: [],
        loading: false,
        errors: '',
        currentAppender: 0,
    },
    reducers: {
        setPartialPosts: (state, action) => {
            state.loading = false;
            state.partialPosts = action.payload;
            state.currentAppender += 1;
        },
        appendPartialPosts: (state, action) => {
            state.partialPosts = [...state.partialPosts, ...action.payload];
            state.currentAppender += 1;
        },
        cleanPartialPosts: (state, action) => {
            state.loading = false;
            state.partialPosts = [];
            state.currentAppender = 0;
        }
    },
    extraReducers: {

        [fetchPosts.pending]: (state) => {
            state.loading = true;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload
        },
        [fetchPosts.rejected]: (state, action) => {
            state.errors = action.payload;
        },
    },
})

export const {
    setPartialPosts,
    appendPartialPosts,
    cleanPartialPosts
} = postSlice.actions;

export default postSlice.reducer;
