import React from 'react'
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";
import { makeStyles } from "@material-ui/core/styles";

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
    </div>
  )
}