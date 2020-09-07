import React from "react";
//import TableOne from "views/DashboardPage/Sections/TableOne.js";
import PersistentDrawerLeft from "components/SideBar/PersistentDrawerLeft";
import TableList from "views/TableList/TableList";
//import MaterialTable from "views/DashboardPage/Sections/MaterialTable.js";
import ReportTable from "./Sections/ReportTable";
//import Table from "views/DashboardPage/Sections/Table";

export default function DashboardPage() {
  return (
    <>
      <div>
        <PersistentDrawerLeft />
        <ReportTable />
        <TableList />
      </div>
    </>
  );
}
