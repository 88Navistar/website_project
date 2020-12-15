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
      <form
        name="contactForm"
        method="POST"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        id="contact-form"
        className="contact-form"
      >
        <p className="screen-reader-text">
        <input type="hidden" name="form-name" value="contactForm" />
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p className="form-row">
          <label htmlFor="contact-form-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="contact-form-name"
            className="form-input"
          />
        </p>
        <p className="form-row">
          <label htmlFor="contant-form-email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="contant-form-email"
            className="form-input"
          />
        </p>
        <p className="form-row">
          <label htmlFor="contant-form-message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            id="contant-form-message"
            className="form-textarea"
            rows="7"
          />
        </p>
        <input type="hidden" name="form-name" value="contactForm" />
        <p className="form-row form-submit">
          <button type="submit" className="button">
            Send Message
          </button>
        </p>
      </form>
    </div>
  );
}
