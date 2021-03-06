/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
//Changed ParallaxStyles to Height:50vh to shorten image
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SimpleReactLightbox from "simple-react-lightbox";
import SectionGrid from "./Sections/SectionGrid";
//import SectionProduct1 from "./Sections/SectionProduct1.js";
import SectionBio from "./Sections/SectionBio.js";
import SectionArt from "./Sections/SectionArt.js";
//import Form from "components/Form/Form.js";
import Form2 from "components/Form/Form2.js";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
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
          color: "info"
        }}
        {...rest}
      />
      <Parallax image={require("assets/photos/dma-5.jpg")} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>David L Massey Art</h1>
              <h4>
                Canadian Landscapes
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="/commission-page"
              >
                Commissioned Art
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
       <div >   {/* className={classes.container} */}
        <SectionBio />
        <SimpleReactLightbox>
          <SectionGrid />
        </SimpleReactLightbox>
        <SectionArt />
        <Form2 />
        </div>
      </div>
     <Footer />
    </div>
  );
}
