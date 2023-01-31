import React from "react";
import "./widgets.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
const Widgets = ({ type }) => {
  let data;
  //temparory ammount
  let amount = 200;
  let diff = 20;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: (
          <Person3OutlinedIcon
            className="icon"
            style={{ color: "#fff", background: "yellow", padding: "2px" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "view all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ color: "#fff", background: "red", padding: "2px" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "view all earning",
        icon: (
          <AttachMoneyOutlinedIcon
            className="icon"
            style={{ color: "#fff", background: "green", padding: "2px" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "view all balance",
        icon: (
          <AccountBalanceOutlinedIcon
            className="icon"
            style={{ color: "#fff", background: "black", padding: "2px" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <section className="widgets">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </section>
  );
};

export default Widgets;
