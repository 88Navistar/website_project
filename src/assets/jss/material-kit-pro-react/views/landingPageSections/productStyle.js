import { featureTitle, title, grayColor } from "assets/jss/material-kit-pro-react.js";

const productStyle = {
  section: {
    padding: "70px 10px",
    textAlign: "center",
  },
  featureTitle: {
    ...featureTitle,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: grayColor[0]
  }
};

export default productStyle;
