import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ReportTable() {
  const [entries, setEntries] = useState({
    data: [
      {
        id: "",
        name: "",
        description: "",
        thumbnail_url: "",
        year: "",
        price: "",
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
      .get("http://localhost:8001/api/paintings")
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
                      `http://localhost:8001/api/paintings/${newData.id}`,
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
                    .delete(`http://localhost:8001/api/paintings/${oldData.id}`)
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
                  axios
                    .post(`http://localhost:8001/api/paintings`, data)
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
