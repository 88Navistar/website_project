import React from 'react'
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(productStyle);


export default function SectionArt() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Commissioned Art</h2>
    </div>
  )
}