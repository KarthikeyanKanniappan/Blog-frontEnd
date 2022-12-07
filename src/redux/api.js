import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// For Login,SignIn and GoogleSignIn
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const google = (result) => API.post("/users/googleSignIn", result);

// to createBlog
export const createBlog = (value) => {
  return API.post("/blog", value);
};
export const getBlog = () => {
  return API.get("/blog");
};
export const particularBlog = (id) => API.get(`/blog/${id}`);
export const getBlogByUser = (id) => API.get(`/blog/userBlog/${id}`);
