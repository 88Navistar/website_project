import React from "react";
import TableOne from "views/DashboardPage/Sections/TableOne.js";
import PersistentDrawerLeft from "components/SideBar/PersistentDrawerLeft";
import TableList from "views/TableList/TableList";
//import Table from "views/DashboardPage/Sections/Table";

export default function DashboardPage() {
  return (
    <>
    <div>
      <PersistentDrawerLeft />
      
      <TableList />

      <TableOne />
    </div>
    </>
  );
}
