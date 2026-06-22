import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  const INIT =
    "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <br></br>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INIT} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            <p>Temperature = {info.temp}°C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Min Temp = {info.tempMin}°C</p>
            <p>Max Temp = {info.tempMax}°C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like = {info.feelsLike}°C
            </p>
          </Typography>{" "}
        </CardContent>
      </Card>
    </div>
  );
}
