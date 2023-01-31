import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./DataTable.scss";
import { userColumn, userRow } from "../dataTableResource";
import { NavLink } from "react-router-dom";

const DataTable = ({ title, url, add }) => {
  const [data, setData] = useState(userRow);

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = {
    field: "action",
    headerName: "ACTION",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="action__button">
          <NavLink to={`/users/${params.row.id}`} className="nav__links">
            <span className="view__button">view</span>
          </NavLink>
          <span
            className="delete__button"
            onClick={() => deleteHandler(params.row.id)}
          >
            delete
          </span>
        </div>
      );
    },
  };
  return (
    <section className="data__table">
      <div className="data__table__header">
        <span>{title}</span>
        <NavLink to={`${url}`} className="links">
          <span>{add}</span>
        </NavLink>
      </div>
      <DataGrid
        rows={userRow}
        className="data__grid"
        columns={userColumn.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </section>
  );
};

export default DataTable;
