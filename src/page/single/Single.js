import React from "react";
import SideBar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./single.scss";
import Chart from "../../components/charts/Chart";
import Tables from "../../components/table/Tables";
import { useParams } from "react-router-dom";

const Single = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <section className="single__list">
      <SideBar />
      <div className="single__list__container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit__button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://e7.pngegg.com/pngimages/519/242/png-clipart-skull-drawing-tattoo-head-skeleton-skull-monochrome-graffiti.png"
                alt="profile__pic"
                className="single__user__profile"
              />
              <div className="details">
                <h1 className="itemTitle">Anuj Singh Naiwnal</h1>
                <div className="itemDetails">
                  <div className="item__key">Email: </div>
                  <div className="item__value">anujsinghnainwal@gmail.com</div>
                </div>
                <div className="itemDetails">
                  <div className="item__key">Address: </div>
                  <div className="item__value">XYZ 122 </div>
                </div>
                <div className="itemDetails">
                  <div className="item__key">Country: </div>
                  <div className="item__value">INDIA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="user spending(last 6 month)" />
          </div>
        </div>
        <div className="bottom">
          <Tables title="user last transaction" />
        </div>
      </div>
    </section>
  );
};

export default Single;
