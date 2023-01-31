import React from "react";
import SideBar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./list.scss";
import DataTable from "../../components/dataTable/DataTable";

const Lists = ({ title, url, add }) => {
  return (
    <section className="list">
      <SideBar />
      <div className="list__container">
        <Navbar />
        <DataTable title={title} url={url} add={add} />
      </div>
    </section>
  );
};

export default Lists;
