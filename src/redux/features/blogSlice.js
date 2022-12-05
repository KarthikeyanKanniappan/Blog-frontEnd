import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createBlog = createAsyncThunk(
  // action
  "blog/createBlog",
  async ({ values, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createBlog(values);
      toast.success("Blog Added Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: {},
    blogs: [],
    userBlogs: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createBlog.pending]: (state, action) => {
      state.loading = true;
    },
    [createBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = [action.payload];
    },
    [createBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default blogSlice.reducer;
