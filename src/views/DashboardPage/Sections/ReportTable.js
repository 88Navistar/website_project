import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import axios from "axios";

const { REACT_APP_BASEURL } = process.env;

export default function ReportTable() {
  const [entries, setEntries] = useState({
    data: [
      {
        id: "",
        name: "",
        description: "",
        // eslint-disable-next-line camelcase
        thumbnail_url: "",
        year: 2016,
        price: 600,
        category: "",
      },
    ],
  });

  const [state] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Description", field: "description" },
      { title: "Link", field: "thumbnail_url" },
      { title: "Year", field: "year" },
      { title: "Price", field: "price" },
      { title: "Category", field: "category" },
    ],
  });

  useEffect(() => {
    axios
      .get(`${REACT_APP_BASEURL}api/paintings`)
      .then((response) => {
        let data = [];
        Object.values(response.data).forEach((el) => {
          data.push({
            id: el.id,
            name: el.name,
            description: el.description,
            thumbnail_url: el.thumbnail_url,
            year: el.year,
            price: el.price,
            category: el.category,
          });
        });
        setEntries({ data: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={{ maxWidth: "100%", padding: "20px" }}>
        <MaterialTable
          title="Available Paintings"
          columns={state.columns}
          data={entries.data}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  const data = [...entries.data];
                  //console.log("post", data)
                  data[data.indexOf(oldData)] = newData;
                  console.log("newData", newData);
                  axios
                    .put(
                      `${REACT_APP_BASEURL}api/paintings/${newData.id}`,
                      newData
                    )
                    .then((res) => console.log(res.data));
                  setEntries({ ...entries, data });
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  const data = [...entries.data];
                  data.splice(data.indexOf(oldData), 1);
                  axios
                    .delete(`${REACT_APP_BASEURL}api/paintings/${oldData.id}`)
                    .then((res) => console.log(res.data));
                  setEntries({ ...entries, data });
                }, 600);
              }),
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve();
                  const data = [...entries.data];
                  data.push(newData);
                  console.log("objectFrontEnd", newData);
                  axios
                    .post(`${REACT_APP_BASEURL}api/paintings`, newData)
                    .then((res) => console.log(res.data));
                  setEntries({ ...entries, data });
                  /* setData([...data, newData]); */
                }, 1000);
              }),
          }}
        />
      </div>
    </>
  );
}
