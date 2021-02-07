import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    "&.MuiCardContent-root": {
      padding: 0,
    },
    margin: "10px",
  },
  root: {
    margin: "10px 0",
  },
}));

function RestaurantDisplay() {
  const classes = useStyles();
  return (
    <div>
      <p>List of Restaurants</p>
      {Data.slice(0, 5).map((c) => (
        <Card className={classes.root} key={c._id}>
          <CardContent className={classes.content}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img
                  // className={classes.cover}
                  src={c.thumb}
                  alt="res-img"
                  width="250px"
                />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="body2"
                  color="inherit"
                  style={{
                    fontSize: 14,
                    marginTop: 18,
                  }}
                >
                  {c.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  component="h5"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {c.address}
                </Typography>
                <Typography variant="overline" display="block" color="inherit">
                  {c.rating}
                </Typography>
                <Typography variant="subtitle2" color="inherit">
                  Cusine
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default RestaurantDisplay;

const Data = [
  {
    _id: "1",
    name: "Gulab",
    city_name: "Delhi",
    city: 1,
    locality: "Pitampura, New Delhi",
    thumb:
      "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
    cost: 450,
    rating: 5,
    address:
      "Shop 1, Plot D,  Pitampura, New Delhi Complex, Chincholi, Delhi-110006, Delhi",
    Tags: ["North Indian"],
  },
  {
    _id: "2",
    name: "Pandit Ji Paratha Hut",
    locality: "Ashok Vihar Phase 2",
    city_name: "Delhi",
    city: "1",
    address:
      "Shop 44, Plot C,  Ahok Vihar Phase 2,Chincholi, Delhi-110006, Delhi",
    thumb:
      "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
    cost: 230,
    rating: 3,
    contact_number: "45352465",
    Tags: ["Spicy", "South Indian", "Tasty"],
  },
  {
    _id: "3",
    name: "Food Adda",
    locality: "Borivali West",
    city_name: "Mumbai",
    city: "2",
    address: "Borivali West, Mumbai-210006, Mumbai",
    thumb:
      "https://b.zmtcdn.com/data/pictures/7/18690357/0df7f4ca0c645a68a1657b1e69b015fa.jpg",
    cost: 530,
    rating: 2,
    contact_number: "467564",
    Tags: ["Spicy", "South Indian"],
  },
  {
    _id: "4",
    name: "Apna Punjab",
    locality: "Magarpatta",
    city_name: "Pune",
    city: "3",
    address: "Borivali West, Mumbai-210006, Mumbai",
    thumb:
      "https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg",
    cost: 670,
    rating: 5,
    contact_number: "6508401",
    Tags: ["Spicy", "North Indian", "Homely"],
  },
  {
    _id: "5",
    name: "Empire Restaurant",
    locality: "Rajajinagar",
    city_name: "Bangalore",
    city: "4",
    address: "Rajajinagar, Bangalore-430006, Bangalore",
    thumb:
      "https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg",
    cost: 230,
    rating: 3,
    contact_number: "8731537",
    Tags: ["Spicy", "South Indian", "Buffet"],
  },
  {
    _id: "6",
    name: "Captain Sams",
    locality: "Sector70, Chandigarh",
    city_name: "Chandigarh",
    city: "5",
    address: "Sector70, Chandigarh-515436",
    thumb:
      "https://b.zmtcdn.com/data/reviews_photos/c7a/634a2c0def8a8d044992aea9e7680c7a_1556257724.jpg",
    cost: 630,
    rating: 1,
    contact_number: "123334",
    Tags: ["Tibetan food", "Desserts", "Juices", "Brunch"],
  },
  {
    _id: "8",
    name: "Punjabi Angithi",
    city_name: "Delhi",
    city: "1",
    locality: "Paschim Vihar, New Delhi",
    thumb:
      "https://b.zmtcdn.com/data/pictures/3/307113/54e0e60a17086184f1e5a44d7f580b54.png",
    cost: 350,
    rating: 5,
    address: "32-22, A 4, DDA Market, Paschim Vihar, New Delhi",
    Tags: ["Spicy", "Punjabi food"],
  },
  {
    _id: "9",
    name: "Rajinder Da Dhaba",
    city_name: "Delhi",
    city: "1",
    locality: "Safdarjung, New Delhi",
    thumb:
      "https://b.zmtcdn.com/data/pictures/9/7319/e1b7673ed0aa2993b55b177409d5596c.jpg",
    cost: 380,
    rating: 4,
    address: "AB 14, Safdarjung Enclave Market, Safdarjung, New Delhi",
    Tags: ["Spicy", "Italian", "Homely"],
  },
  {
    _id: "10",
    name: "Diggin",
    city_name: "Delhi",
    locality: "Chanakyapuri, New Delhi",
    thumb:
      "https://b.zmtcdn.com/data/pictures/3/307113/54e0e60a17086184f1e5a44d7f580b54.png",
    cost: 650,
    rating: 3,
    address:
      "10, Santushti Shopping Complex, Race Course Road, Chanakyapuri, New Delhi",
    Tags: ["Spicy", "Italian", "Night life"],
  },

  {
    _id: "11",
    name: "Saravana Bhavan",
    city_name: "Delhi",
    city: "1",
    locality: "Connaught Place, New Delhi",
    thumb:
      "https://b.zmtcdn.com/data/res_imagery/899_CHAIN_8b679bb604a1a4f128971906e6027c05.jpg",
    cost: 650,
    rating: 5,
    address: "P-13, Connaught Circus, Connaught Place, New Delhi",
    Tags: ["Spicy", "Desserts", "Good"],
  },
  {
    _id: "12",
    name: "Bukhara",
    city_name: "Delhi",
    locality: "Chanakyapuri, New Delhi",
    thumb:
      "https://b.zmtcdn.com/data/res_imagery/2742_RESTAURANT_b42f02ef23f24c3bcc0b005606d34b63.jpg",
    cost: 650,
    rating: 5,
    address: "ITC Maurya, Chanakyapur, New Delhi",
    Tags: ["Spicy", "Briyani", "Homely"],
  },
];
