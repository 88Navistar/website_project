import React from "react";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";

import alaskaPano from "assets/img/alaskaPano.jpg";

const style = {
  ...productStyle,
  section: {
    padding: "70px 30px",
    textAlign: "center",
    backgroundColor: "ghostwhite",
  },
};

const useStyles = makeStyles(style);

export default function SectionArt() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>Commissioned Art</h1>
      <Card>
                <img
                  style={{ height: "100%", width: "100%", display: "block" }}
                  className={classes.imgCardTop}
                  src={alaskaPano}
                  alt="Card-img-cap"
                />
                <h4>Cooper Landing - Kenai Penisula - 2019</h4>
              </Card>
      <p>
        I am a Canadian landscape artist who is offering my fine art services to
        anyone looking for beautiful works of art for their home or work
        space.These acrylic paintings on stretched canvas are colourful and
        detailed works that are perfect for anyone looking to beautify their
        home interiors. My paintings are generally between 16”x20” to 48”x60”
        (or larger), and can be commissioned for generally low prices. My going
        rate for custom work is considered very affordable, but may fluctuate
        depending on the complexity of the piece. If you are looking for a
        certain size or idea, feel free to contact me. I can work from a
        photograph or a proposal you may have.
      </p>
      <Button color="tumblr" href="/commission-page">
          Commissioned Art
        </Button>
    </div>
  );
}
