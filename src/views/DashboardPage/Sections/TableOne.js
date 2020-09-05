import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

//import product1 from "assets/img/product1.jpg";
import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";

const useStyles = makeStyles(shoppingCartStyle);

export default function TableOne() {
  const classes = useStyles();
  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <h3 className={classes.cardTitle}>Shopping Cart</h3>
              <Table
                tableHead={[
                  "",
                  "PRODUCT",
                  "COLOR",
                  "SIZE",
                  "PRICE",
                  "QTY",
                  "AMOUNT",
                  "",
                ]}
                tableData={[
                  [
                    <div className={classes.imgContainer} key={1}>
                      <img src={require("assets/photos/dma-1.jpg")} alt="..." className={classes.img} />
                    </div>,
                    <span key={1}>
                      <a href="#jacket" className={classes.tdNameAnchor}>
                        Spring Jacket
                      </a>
                      <br />
                      <small className={classes.tdNameSmall}>
                        by Dolce&amp;Gabbana
                      </small>
                    </span>,
                    "Red",
                    "M",
                    <span key={1}>
                      <small className={classes.tdNumberSmall}>€</small> 549
                    </span>,
                    <span key={1}>
                      1{` `}
                      <div className={classes.buttonGroup}>
                        <Button
                          color="info"
                          size="sm"
                          round
                          className={classes.firstButton}
                        >
                          <Remove />
                        </Button>
                        <Button
                          color="info"
                          size="sm"
                          round
                          className={classes.lastButton}
                        >
                          <Add />
                        </Button>
                      </div>
                    </span>,
                    <span key={1}>
                      <small className={classes.tdNumberSmall}>€</small> 549
                    </span>,
                    <Tooltip
                      key={1}
                      id="close1"
                      title="Remove item"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button link className={classes.actionButton}>
                        <Close />
                      </Button>
                    </Tooltip>,
                  ],
                  [
                    <div className={classes.imgContainer} key={1}>
                      <img src={product2} alt="..." className={classes.img} />
                    </div>,
                    <span key={1}>
                      <a href="#jacket" className={classes.tdNameAnchor}>
                        Short Pants{" "}
                      </a>
                      <br />
                      <small className={classes.tdNameSmall}>by Gucci</small>
                    </span>,
                    "Purple",
                    "M",
                    <span key={1}>
                      <small className={classes.tdNumberSmall}>€</small> 499
                    </span>,
                    <span key={1}>
                      2{` `}
                      <div className={classes.buttonGroup}>
                        <Button
                          color="info"
                          size="sm"
                          round
                          className={classes.firstButton}
                        >
                          <Remove />
                        </Button>
                        <Button
                          color="info"
                          size="sm"
                          round
                          className={classes.lastButton}
                        >
                          <Add />
                        </Button>
                      </div>
                    </span>,
                    <span key={1}>
                      <small className={classes.tdNumberSmall}>€</small> 998
                    </span>,
                    <Tooltip
                      key={1}
                      id="close2"
                      title="Remove item"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button link className={classes.actionButton}>
                        <Close />
                      </Button>
                    </Tooltip>,
                  ],
                  [
                    <div className={classes.imgContainer} key={1}>
                      <img src={product3} alt="..." className={classes.img} />
                    </div>,
                    <span key={1}>
                      <a href="#jacket" className={classes.tdNameAnchor}>
                        Pencil Skirt
                      </a>
                      <br />
                      <small className={classes.tdNameSmall}>
                        by Valentino
                      </small>
                    </span>,
                    "White",
                    "XL",
                    <span key={1}>
                      <small className={classes.tdNumberSmall}>€</small> 799
                    </span>,
                    <span key={1}>
                      1{` `}
                      <div className={classes.buttonGroup}>
                        <Button
                          color="info"
                          size="sm"
                          round
                          className={classes.firstButton}
                        >
                          <Remove />
                        </Button>
                        <Button
                          color="info"
                          size="sm"
                          round
                          className={classes.lastButton}
                        >
                          <Add />
                        </Button>
                      </div>
                    </span>,
                    <span key={1}>
                      <small className={classes.tdNumberSmall}>€</small> 799
                    </span>,
                    <Tooltip
                      key={1}
                      id="close3"
                      title="Remove item"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button link className={classes.actionButton}>
                        <Close />
                      </Button>
                    </Tooltip>,
                  ],
                  {
                    purchase: true,
                    colspan: "3",
                    amount: (
                      <span>
                        <small>€</small>2,346
                      </span>
                    ),
                    col: {
                      colspan: 3,
                      text: (
                        <Button color="info" round>
                          Complete Purchase <KeyboardArrowRight />
                        </Button>
                      ),
                    },
                  },
                ]}
                tableShopping
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.description,
                  classes.description,
                  classes.textRight,
                  classes.textRight,
                  classes.textRight,
                ]}
                customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                customCellClasses={[
                  classes.tdName,
                  classes.customFont,
                  classes.customFont,
                  classes.tdNumber,
                  classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                  classes.tdNumber + " " + classes.textCenter,
                ]}
                customClassesForCells={[1, 2, 3, 4, 5, 6]}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
