import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./ourChef.scss";
const OurChef = () => {
  return (
    <>
      <div className="ourChef">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="card-img"></div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="card-content">
                  <span>about tasty</span>
                  <h2>Our chef cooks the most delicious food for you</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default OurChef;
