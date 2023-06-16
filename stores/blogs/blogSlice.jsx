import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    singleBlog: {},
    blogs: []
}

export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const blogs = await response.json();

    return blogs;
})

export const getSingleBlog = createAsyncThunk("blogs/getBlog", async (id) => {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const blog = await response.json();

    return blog;
}
);

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        });
        builder.addCase(getSingleBlog.fulfilled, (state, action) => {
            state.singleBlog = action.payload
        });
    },
})


export default blogSlice.reducer