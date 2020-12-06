import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryCard from "./GalleryCard";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

export default function GalleryCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://customer.elephantsql.com/api/trial/paintings",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3002",
        authorization: "daa7f15a-e5b5-4e5a-9c93-18d97c07f29e",
        "Content-Type": "application/json",
      },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios("http://localhost:8001/api/paintings")
      .then((result) => setData(Object.values(result.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <GridContainer>
          <GridItem>
            {data.map((item) => {
              return <GalleryCard key={item.id} {...item} />;
            })}
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
