import React from "react";

import classNames from "classnames";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GalleryCards from "./Sections/GalleryCards.js";
//import GalleryCard from "./Sections/GalleryCard.js";
//import PaintingContainer from "./Sections/PaintingContainer";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import galleryPageStyle from "assets/jss/material-kit-pro-react/views/galleryPageStyle.js";

const useStyles = makeStyles(galleryPageStyle);

export default function GalleryIndex({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="Home"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
        {...rest}
      />
      <Parallax image={require("assets/photos/dma-2.jpg")} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>David L Massey Art</h1>
              <h4>Canadian Landscapes</h4>
              <br />
              <Button color="danger" size="lg">
                Where To?
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {" "}
          {/* Centers cards in container.Take out for less padding */}
          <div>
            <GalleryCards />
          </div>
          {/* <PaintingContainer /> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
