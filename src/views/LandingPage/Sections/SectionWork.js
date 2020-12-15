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
          <form name="contact" method="POST" data-netlify="true">
            <GridContainer>
              <input type="hidden" name="form-name" value="contact" />
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  name="name"
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
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                name="message"
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
      <form name="contactone" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
