import React from "react";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

//import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import daveProfileWtDog1 from "assets/img/faces/dave_profile_wt_dog1.jpg";

const style = {
  ...productStyle,
  section: {
    padding: "70px 30px",
    textAlign: "center",
    backgroundColor: "ghostwhite",
  },
};

const useStyles = makeStyles(style);

export default function SectionBio() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.section}>
        <h1 className={classes.title}>Artist Profile</h1>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <Card>
                <img
                  style={{ height: "100%", width: "100%", display: "block" }}
                  className={classes.imgCardTop}
                  src={daveProfileWtDog1}
                  alt="Card-img-cap"
                />
                <h4 className={classes.cardTitle}>David and Ally</h4>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <Card>
                
                <p>
                  David and his 5 year old German Shepard need the Ram River
                </p>
              </Card>
            </GridItem>

            
          </GridContainer>
        </div>
        <Button color="simple" href="/profile-page">
              Full Profile
            </Button>
      </div>
    </>
  );
}
