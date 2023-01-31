import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { NavLink } from "react-router-dom";
import { darkModeContext } from "../../context/darkModeContext";
const SideBar = () => {
  const { dispatch } = useContext(darkModeContext);
  return (
    <section className="sidebar">
      <div className="top">
        <NavLink to="/" className="navLinks">
          <span className="logo">Bandwidth</span>
        </NavLink>
      </div>
      <hr className="bottom__underline" />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <NavLink to="/" className="navLinks">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <p className="title">Lists</p>
          <NavLink to="/users" className="navLinks">
            <li>
              <PersonIcon className="icon" /> <span>Users</span>
            </li>
          </NavLink>
          <NavLink to="/products">
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </NavLink>
          <li>
            <ImportContactsOutlinedIcon className="icon" /> <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <InsightsOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">Services</p>
          <li>
            <HealthAndSafetyOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Setting</span>
          </li>
          <p className="title">User</p>
          <li>
            <ManageAccountsOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <span
          className="light"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></span>
        <span
          className="dark"
          onClick={() => dispatch({ type: "DARK" })}
        ></span>
      </div>
    </section>
  );
};

export default SideBar;
