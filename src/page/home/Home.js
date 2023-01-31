import React from "react";
import SideBar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Chart from "../../components/charts/Chart";
import Feature from "../../components/feature/Feature";
import Table from "../../components/table/Tables";

const Home = () => {
  return (
    <section className="home">
      <SideBar />
      <div className="container">
        <Navbar />
        <div className="widget">
          <Widgets type="users" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Feature />
          <Chart aspect={2 / 1} title="Last 6 month transaction chart" />
        </div>
        <div className="tableContainerList">
          <h2 className="title">Last 6 month transaction</h2>
          <Table />
        </div>
      </div>
    </section>
  );
};

export default Home;
