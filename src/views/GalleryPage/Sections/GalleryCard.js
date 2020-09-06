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
//import GridItem from "components/Grid/GridItem";
//import GridContainer from "components/Grid/GridContainer";
//import PropTypes from "prop-types";

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
            <p>{props.description}</p>
          </CardBody>
          <CardFooter plain style={{justifyContent: "space-around" }}>
            <h3 className={classes.cardTitle}>{props.name} </h3>

            <p>
              <small className={classes.textMuted}>Acrylic on Canvas</small>
            </p>
            <div className={classes.priceContainer}>
              <span className={classNames(classes.price)}>${props.price}</span>
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

            <Button
              round
              color="info"
              onClick={() =>
                // window.dispatchEvent("addItemToCart", props.item)
                // eslint-disable-next-line react/prop-types
                console.log(props.id, props.thumbnail_url)
              }
            >
              Add to Cart &nbsp;
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
