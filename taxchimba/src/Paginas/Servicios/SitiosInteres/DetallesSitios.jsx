import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./detalleSitios";

const DetallesSitios = ({ lugar }) => {
  const classes = useStyles();

  if (!lugar.name) {
    return <div></div>;
  }

  return (
    <Card elevation={6} style={{borderTop: 20, marginBottom: '20px'}}>
      <CardMedia
        style={{ height: 350 }}
        image={
          lugar.photo
            ? lugar.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={lugar.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {lugar.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(lugar.rating)} readOnly />
          <Typography component="legend">{lugar.num_reviews} calificacion{lugar.num_reviews > 1 && 'es'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Precio</Typography>
          <Typography gutterBottom variant="subtitle1">
            {lugar.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {lugar.ranking}
          </Typography>
        </Box>
        {lugar?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {lugar?.cuisine?.slice(0, 3).map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {lugar.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{lugar.address}
          </Typography>
        )}
        {lugar.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {lugar.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(lugar.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(lugar.website, '_blank')}>
          Sitio Web
        </Button>
      </CardActions>
    </Card>
  );
};

export default DetallesSitios;
