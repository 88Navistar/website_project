import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryCard from "./GalleryCard";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

export default function GalleryCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:8001/api/paintings")
      .then((result) => setData(Object.values(result.data)))
      .catch((err) => console.log(err));
  }, []);
  // <div>
  //   <MenuAppBar />
  //     <h1 style={{ textAlign: "center" }}>All Paintings</h1>
  //     <Masonry breakpointCols={breakpointColumnsObj}>
  //       {data.map(item => {
  //         return (<PhotoCard key={item.id} {...item}/>)
  //       })}
  //     </Masonry>
  //   </div>
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
