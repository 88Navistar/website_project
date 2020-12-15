import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(workStyle);

export default function SectionWork() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={8} md={8}>
          <h2 className={classes.title}>Contact David</h2>
          <h4 className={classes.description}>
            Please use the contact form for any questions or comments.
          </h4>
          <form
            name="contact"
            netlify
            method="post"
            enctype="multipart/form-data"
            action="/thank-you/"
          >
            <GridContainer>
              <input type="hidden" name="form-name" value="contact" />
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  name="name"
                  type="text"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  name="email"
                  type="text"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                name="message"
                type="text"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem
                xs={12}
                className={classes.mrAuto + " " + classes.mlAuto}
                style={{ textAlign: "center" }}
              >
                <div data-netlify-recaptcha="true"></div>
              </GridItem>
              <GridItem
                xs={12}
                className={classes.mrAuto + " " + classes.mlAuto}
                style={{ textAlign: "center" }}
              >
                <Button type="submit" color="tumblr">
                  Send Message
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
