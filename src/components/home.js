import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoriesFilter from "./Filters/categoryFilter";
import CityFilter from "./Filters/cityFilter";
import PriceFilter from "./Filters/priceFilter";
import RateFilter from "./Filters/rateFilter";
import TagsFilter from "./Filters/tagsFilter";
import Sort from "./Sorts/sort";
import { Grid, Container, Box, TextField, Typography } from "@material-ui/core";
import RestaurantDisplay from "./restaurantDisplay";
const url = "http://localhost:8900/restaurantdetails?";
const restUrl = "http://localhost:8900/restaurantdetails";

function Home() {
  const [restaurant, setRestaurant] = useState(null);
  const [city, setCity] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [rate, setRate] = useState(null);
  const [tags, setTags] = useState(null);
  const [sort, setSort] = useState(null);

  const params = {
    city: city,
    category: category,
    Tags: tags,
    rating: Number(rate),
    cost: price,
    sort: sort,
  };
  let query = {};
  Object.keys(params).map((item) => {
    if (params.item) {
      query = { ...query, item: params.item };
    }
  });
  useEffect(() => {
    if (query) {
      fetch(url + new URLSearchParams(query).toString(), { method: "GET" })
        .then((data) => data.json())
        .then((data) => setRestaurant(data));
    } else {
      fetch(restUrl, { method: "GET" })
        .then((data) => data.json())
        .then((data) => setRestaurant(data));
    }
  });

  return (
    <>
      <Container>
        <Box marginTop={5}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <Typography variant="body1" style={{ marginLeft: "10px" }}>
                Filter
              </Typography>
              <Sort handleChange={setSort} value={sort} />
              <PriceFilter handleChange={setPrice} value={price} />
              <CategoriesFilter handleChange={setCategory} />
              <RateFilter handleChange={setRate} value={rate} />
              <TagsFilter handleChange={setTags} />
            </Grid>
            <Grid item xs={8}>
              <RestaurantDisplay />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Home;

{
  /* <p>
{url}
{new URLSearchParams(query).toString()}
</p>
<p>List of restaurant</p> */
}
{
  /*restaurant.map((rest, i) => {
    return <RestaurantDisplay restaurant={rest} />
})*/
}
