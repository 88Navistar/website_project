/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";

import dave from "assets/img/faces/dave.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import Quote from "components/Typography/Quote";
import SectionWork from "views/LandingPage/Sections/SectionWork";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/photos/dma-2.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={dave} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h2 className={classes.title}>David Massey</h2>
                  <h4>ARTIST</h4>
                  <Button
                    justIcon
                    simple
                    color="dribbble"
                    className={classes.margin5}
                    href="https://www.instagram.com/davidmassey24/"
                    target="_blank"
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    className={classes.margin5}
                    href="https://twitter.com/DavidLMass67"
                    target="_blank"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="pinterest"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </div>
             
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textLeft)}>
            <Quote 
              text="If a piece of art can speak to your senses, take you to another moment in time, that is special"
              author=" David Massey - Canadian Landscape Artist"
            />
            <p>
            Thank you for checking out my art.  My name is David Massey. I'm a traditional landscape artist and I currently live in Red Deer, Alberta, Canada. I love everything about nature, from prairies to mountains, animals and birds. I have a passion for the outdoors; the feeling it gives to be away in a quiet spot.  Art is a way I can express that, sharing those moments and feelings with you.  
If you are interested in knowing a little more about me then feel free to keep reading. Otherwise thanks again and if you have any questions please send me a message! 
<br/>
<br/>
I was born in Saskatchewan and lived on a grain farm in my early years.  This gave me an inherited love for the prairie; old barnes, big skies and endless fields of swaying grain swaying.   Growing up in Alberta, with it’s bountiful landscapes instilled an appreciation for the mountains, rivers and abundance of amazing wildlife. I've always loved to draw.  One day I picked up a paint brush and that has led me here.
Exploring the rural areas of this country is something I'll always love. We have so many wonderful communities with extraordinary amounts of scenic countryside where the wildlife thrives. From the prairies, to the west country, to the shores of Vancouver Island, I've found beauty throughout and most often times where I least expected it. Sharing these times with my close friends and family has created memories that will last my lifetime. 
<br/>
<br/>
It's these memories that inspire me to create. Life itself is beautiful. I feel my art reflects my prairie roots, love of the mountains and longing for the west coast. The beauty of Canada’s landscapes and nature drive me to create pieces that reflect  the incredible diversity and loveliness of our amazing country.  I want my art to reflect that inspiration and connect with those who share that similar love. I want my painting to speak to your senses and take you to a moment in time.
{" "}
            </p>
            <br></br>
          </div>
        </div>
      </div>
      <SectionWork />
      <Footer />
    </div>
  );
}
