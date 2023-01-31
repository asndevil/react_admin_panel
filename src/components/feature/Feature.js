import React from "react";
import "./feature.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const Feature = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreHorizOutlinedIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="featured__charts">
          <CircularProgressbar value={70} text={"50%"} strokeWidth={5} />
        </div>
        <p className="title">Total sale</p>
        <p className="amount">$450</p>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Title</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon />
              <div className="resultAmount">$12.20K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>

            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon />
              <div className="resultAmount">$12.20</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Title</div>

            <div className="itemResult positive">
              <div className="resultAmount">$12.20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
