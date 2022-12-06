import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const CardType = ({ item }) => {
  function parseISOString(s) {
    let date = new Date(s);
    let sent = String(date).split(" ");
    return `${sent[2]}-${sent[1]}-${sent[3]} at ${sent[4]}`;
  }
  function descriptionLength(str) {
    if (str.length > 45) {
      str = str.substring(0, 45) + "....";
    }
    return str;
  }
  return (
    <Card className="m-2" sx={{ maxWidth: 400 }}>
      <CardHeader
        title={`${item.name}`}
        subheader={`${parseISOString(item.createdAt)}`}
      />

      <CardMedia
        component="img"
        height="140"
        image={`${item.imageFile}`}
        alt="green iguana"
      />
      <Stack className=" mt-3 mx-1" direction="row" spacing={1}>
        {item.tags.map((el, i) => {
          return <Chip key={i} label={`${el}`} />;
        })}
      </Stack>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${item.title}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${descriptionLength(item.description)}`}
        </Typography>
      </CardContent>

      <CardActions className="mb-3">
        <Link
          style={{
            fontFamily: "Ubuntu Condensed",
          }}
          to={`/blog/${item._id}`}
          size="small"
          className="btn btn-outline-dark"
        >
          LEARN MORE
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardType;
