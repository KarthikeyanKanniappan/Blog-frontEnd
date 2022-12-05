import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import AddBlog from "./components/AddBlog";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <BrowserRouter>
      <>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signIn" element={<Register />}></Route>
          <Route path="/addBlog" element={<AddBlog />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
