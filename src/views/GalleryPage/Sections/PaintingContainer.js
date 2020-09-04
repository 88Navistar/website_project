import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
//import Select from "@material-ui/core/Select";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button.js";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function PaintingContainer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem md={6} sm={6}></GridItem>
          <GridItem md={6} sm={6}>
            <h2 className={classes.title}>Becky Silk Blazer</h2>
            <h3 className={classes.mainPrice}>$335</h3>

            <GridContainer className={classes.pickSize}>
              <GridItem md={6} sm={6}>
                <label>Select color</label>
                <FormControl
                  fullWidth
                  className={classes.selectFormControl}
                ></FormControl>
              </GridItem>
              <GridItem md={6} sm={6}>
                <label>Select size</label>
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.pullRight}>
              <Button round color="rose">
                Add to Cart &nbsp; <ShoppingCart />
              </Button>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
