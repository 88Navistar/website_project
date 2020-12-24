import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";
//import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { cardTitle } from "assets/jss/material-kit-pro-react.js";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

const style = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d",
  },
};

const useStyles = makeStyles(style);

export default function GalleryCard(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Card>
          <img
            className={classes.imgCardTop}
            // src={require("assets/photos/dma-4.jpg")}
            src={props.thumbnail_url}
            alt="Card-img-cap"
          />
          <CardBody>
            <h2 className={classes.cardTitle}>{props.name} </h2>
          </CardBody>
          <CardFooter plain style={{ justifyContent: "space-around" }}>
            <h4>{props.description}</h4>
            <p>
              <small className={classes.textMuted}>Fine Art</small>
            </p>
            <div className={classes.priceContainer}>
              <span className={classes.cardTitle}>${props.price}</span>
            </div>

            <div className={classNames(classes.stats, classes.mlAuto)}>
              <Tooltip
                id="tooltip-top"
                title="Saved to Wishlist"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button justIcon simple color="rose">
                  <Favorite />
                </Button>
              </Tooltip>
            </div>

            <Button round color="info">
              {props.category}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

// GalleryCard.PropTypes = {
//   price: PropTypes.number,
//   thumbnail_url: PropTypes.node

// }
