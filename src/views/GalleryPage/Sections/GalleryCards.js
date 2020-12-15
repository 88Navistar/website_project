import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryCard from "./GalleryCard";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const { REACT_APP_BASEURL } = process.env;

export default function GalleryCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(`${REACT_APP_BASEURL}api/paintings`)
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
