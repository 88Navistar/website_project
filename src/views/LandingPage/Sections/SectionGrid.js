import React from "react";
import "./grid.css";
import { SRLWrapper } from "simple-react-lightbox";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";
import Button from "components/CustomButtons/Button.js";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(productStyle);

export default function SectionGrid() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Paper className={classes.paper}>
        <h1 className={classes.title}>Feature Gallery</h1>
        <GridContainer sm={12}>
          <SRLWrapper>
            <div className="row">
              <div className="column">
                <img src={require("assets/photos/feature2-.jpg")} alt="picholder" />
                <img src={require("assets/photos/dma-19.jpg")} alt="picholder" />
                <img src={require("assets/photos/feature8-.jpg")} alt="picholder" />
              </div>
              <div className="column">
                <img src={require("assets/photos/feature1-.jpg")} alt="picholder" />
                <img src={require("assets/photos/dma-5.jpg")} alt="picholder" />
                <img src={require("assets/photos/dma-3.jpg")} alt="picholder" />
              </div>
              <div className="column">
                <img src={require("assets/photos/dma-10.jpg")} alt="picholder" />
                <img src={require("assets/photos/feature4-.jpg")} alt="picholder" />
                <img src={require("assets/photos/dma-2.jpg")} alt="picholder" />
              </div>
            </div>
          </SRLWrapper>
        </GridContainer>
        <p>Click the button to see the full view gallery</p>
        <Button color="tumblr" href="/gallery-page">
          Gallery
        </Button>
      </Paper>
    </div>
  );
}
