import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from "views/DashboardPage/Sections/Table";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "ID",
                "Name",
                "Description",
                "Url",
                "Year",
                "Price",
                "Catagory",
              ]}
              tableData={[
                [
                  "1",
                  "Painting1",
                  "Description",
                  "https://raw.githubusercontent.com/88Navistar/final-project/master/public/photos/dma-1.jpg?token=APIFOS7A6JCVLJDUQFIFSG27LKANS",
                  2019,
                  250,
                  "Painting",
                ],
                [
                  "2",
                  "Painting2",
                  "Description",
                  "https://raw.githubusercontent.com/88Navistar/final-project/master/public/photos/dma-2.jpg?token=APIFOS6MGGB3GMVK5V2OHNK7LKBNY",
                  2019,
                  1200,
                  "Painting",
                ],
                [
                  "3",
                  "Painting3",
                  "Description",
                  "https://raw.githubusercontent.com/88Navistar/final-project/master/public/photos/dma-3.jpg?token=APIFOS6RNKONQQGYWCZ3FLS7LKLWU",
                  2019,
                  1200,
                  "Painting",
                ],
                [
                  "4",
                  "Painting4",
                  "Description",
                  "https://raw.githubusercontent.com/88Navistar/final-project/master/public/photos/dma-4.jpg?token=APIFOS4DAQQURKNINVRXGBC7LKLZ4",
                  2019,
                  850,
                  "Painting",
                ],
                [
                  "5",
                  "Painting5",
                  "Description",
                  "https://raw.githubusercontent.com/88Navistar/final-project/master/public/photos/dma-5.jpg?token=APIFOS3ZN4HMV5XNSW7K4TS7LKL34",
                  2019,
                  350,
                  "Painting",
                ],
                [
                  "6",
                  "Painting6",
                  "Description",
                  "https://raw.githubusercontent.com/88Navistar/final-project/master/public/photos/dma-6.jpg?token=APIFOS3PECYPXPDNDO4V5BS7LKL66",
                  2019,
                  659,
                  "Painting",
                ],
                [
                  "6",
                  "Painting6",
                  "Description",
                  "https://raw.githubusercontent.com/88Navistar/final-project/master/public/photos/dma-6.jpg?token=APIFOS3PECYPXPDNDO4V5BS7LKL66",
                  2019,
                  659,
                  "Painting",
                ],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
