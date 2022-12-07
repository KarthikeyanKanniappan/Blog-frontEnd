import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogByUser } from "../redux/features/blogSlice";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const theme = createTheme({
  typography: {
    fontFamily: ["Ubuntu Condensed"].join(","),
  },
});
const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userBlogs, loading } = useSelector((state) => ({ ...state.blog }));
  const userId = user?.result._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getBlogByUser(userId));
    }
  }, [userId]);

  function descriptionLength(str) {
    if (str.length > 60) {
      str = str.substring(0, 60) + "....";
    }
    return str;
  }

  return (
    <ThemeProvider theme={theme}>
      <div
        className="mt-4"
        style={{ margin: "auto", maxWidth: "900px", alignContent: "center" }}
      >
        {userBlogs &&
          userBlogs.map((item, index) => (
            <div key={index} className="col-lg-12 col-md-12 mb-5 ">
              <Card
                className="m-auto d-flex justify-content-between"
                sx={{ maxWidth: "650px" }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`${item.imageFile}`}
                  alt="green iguana"
                  fluid
                  className="m-4"
                  sx={{ maxWidth: "250px" }}
                />
                <CardContent className="mt-4">
                  <Typography variant="h6">{`${item.title}`}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`${descriptionLength(item.description)}`}
                  </Typography>
                </CardContent>
                <div className="d-flex m-auto">
                  <button type="button" class="btn ">
                    <DeleteIcon />
                  </button>
                  <button type="button" class="btn ">
                    <SaveAltIcon />
                  </button>
                </div>
              </Card>
            </div>
          ))}
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
