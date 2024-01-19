import React, { useEffect } from "react";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import CakeIcon from "@mui/icons-material/Cake";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./wishlist.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addBasket, addWishlist } from "../../redux/slice/mealSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.meal.wishlist);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <div className="ourMenu">
        <div className="containerr">
          <div className="menu-intro">
            <span>OUR MENU</span>
            <h2>Discover Our Exclusive Menu</h2>
          </div>
          <div className="choose-menu-type">
            <div className="menu-type-item">
              <RamenDiningIcon style={{ color: "#404044" }} /> <p>Main</p>
            </div>
            <div className="menu-type-item">
              <CakeIcon style={{ color: "#404044" }} /> <p>Dessert</p>
            </div>
            <div className="menu-type-item">
              <LocalBarIcon style={{ color: "#404044" }} /> <p>Drinks</p>
            </div>
          </div>

          <div className="menu">
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                style={{ padding: "0px", margin: "0px" }}
              >
                {wishlist &&
                  wishlist.map((item) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={6}
                        lg={6}
                        key={item._id}
                      >
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            sx={{ height: 140 }}
                            image={item.image}
                            title="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.ingredients}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.price}$
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <FavoriteIcon
                              onClick={() => {
                                dispatch(addWishlist(item));
                              }}
                            />
                            <ShoppingBasketIcon
                              onClick={() => {
                                dispatch(addBasket(item));
                              }}
                            />
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
