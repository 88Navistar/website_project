import React, { useEffect } from "react";
// nodejs library to set properties for components
//import PropTypes from "prop-types";
// nodejs library that concatenates classes
//import classNames from "classnames";

// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

//import styles from "assets/jss/material-kit-pro-react/components/paginationStyle.js";

//const useStyles = makeStyles(styles);

export default function ShoppingCart(props) {
  //const classes = useStyles();
  
  
  const hasShoppingCartItems = Array.isArray(props.items);
  useEffect(() => {
    window.addEventListener("addItemToCart", (event) => {
      const { eventData } = event;
      const { item } = eventData;
      if (item) {
        // TODO: validate the item's properties, making sure it's an actual item
        props.items.push(item);
      }
    });
  }, []);

  return (
    <li classNames="shopping-cart" role="menuitem">
      <a className="shopping-cart-link" href="/cart">
        <Button icon="cart" aria-hidden="true" /> <span>Cart</span>
        {hasShoppingCartItems && (
          <sup className="shopping-cart-count">{props.items.length}</sup>
        )}
      </a>
    </li>
  );
}
