import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";
import Button from "components/CustomButtons/Button.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import { TextField } from "formik-material-ui";

const useStyles = makeStyles(workStyle);

const formSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

export default function Form2() {
  const classes = useStyles();
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xwkwrjak",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Your message has been submitted");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div>
      <GridContainer justify="center">
        <GridItem cs={12} sm={8} md={8}>
          <h2 className={classes.title}>Contact David</h2>
          <h4 className={classes.description}>
            Please use the contact form for any questions or comments.
          </h4>
          <Formik
            initialValues={{ email: "", message: "" }}
            onSubmit={handleOnSubmit}
            validationSchema={formSchema}
          >
            {({ isSubmitting }) => (
              <Form id="fs-frm" noValidate>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <label htmlFor="name">Name:</label>
                    <Field
                      component={TextField}
                      id="name"
                      type="name"
                      name="name"
                    />

                    <ErrorMessage
                      name="name"
                      className="errorMsg"
                      component="p"
                    />
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                    <label htmlFor="email">Email:</label>
                    <Field component={TextField} id="email" type="email" name="email" />
                    <ErrorMessage
                      name="email"
                      className="errorMsg"
                      component="p"
                    />
                  </GridItem>

                  <label htmlFor="message">Message:</label>
                  <Field component={TextField} id="message" name="message" formControlProps={{
                    fullWidth: true,
                  }}/>
                  <ErrorMessage
                    name="message"
                    className="errorMsg"
                    component="p"
                  />

                  <GridItem
                    xs={12}
                    className={classes.mrAuto + " " + classes.mlAuto}
                    style={{ textAlign: "center" }}
                  >
                    <Button
                      type="submit"
                      color="tumblr"
                      disabled={isSubmitting}
                    >
                      Send Message
                    </Button>
                    {serverState && (
                      <p className={!serverState.ok ? "errorMsg" : ""}>
                        {serverState.msg}
                      </p>
                    )}
                  </GridItem>
                </GridContainer>
              </Form>
            )}
          </Formik>
        </GridItem>
      </GridContainer>
    </div>
  );
}
