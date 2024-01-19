import React, { useEffect } from "react";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import CakeIcon from "@mui/icons-material/Cake";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./ourMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addBasket, addWishlist } from "../../redux/slice/mealSlice";

const OurMenu = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.meal.data);
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
                {
                  data&&data.map(item=>{
                    return <Grid item xs={12} sm={12} md={12} xl={6} lg={6} key={item._id}>
                    <Card sx={{ display: "flex" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 80 }}
                        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3Dg"
                        alt="Live from space album cover"
                        style={{
                          height: "80px",
                          borderRadius: "50%",
                          margin: "0px",
                          marginTop: "10px",
                          marginLeft: "10px",
                        }}
                      />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                          {item.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                          {item.ingredients}
                          </Typography>
                        </CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        ></Box>
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h6">
                         {item.price}
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                             <Typography onClick={()=>{
                              dispatch(addWishlist(item))
                             }}>
                             {
                               wishlist.find((elem)=>elem._id==item._id)? <FavoriteIcon />:<FavoriteBorderIcon/>
                              }
                             </Typography>
                             
                            </Grid>
                            <Grid item xs={6}>
                              <ShoppingBasketIcon onClick={()=>{
                                dispatch(addBasket(item))
                              }}/>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Box>
                    </Card>
                  </Grid>
                  })
                }
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMenu;
