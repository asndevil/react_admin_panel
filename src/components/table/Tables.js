import React from "react";
import "./table.scss";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Table, TableBody } from "@mui/material";

const Tables = ({ title }) => {
  const rows = [
    {
      id: 1,
      product: "Asus Laptop",
      img: "https://dlcdnwebimgs.asus.com/files/media/2B37C5BC-FC31-4697-925A-6622E78C5CF9/v4/img/nv-slick-1.jpg",
      customer: "Anuj singh nainwal",
      amount: 22,
      date: "2 Jan 2023",
      method: "online",
      status: "success",
    },
    {
      id: 2,
      product: "Asus Laptop",
      img: "https://dlcdnwebimgs.asus.com/files/media/2B37C5BC-FC31-4697-925A-6622E78C5CF9/v4/img/nv-slick-1.jpg",
      customer: "Anuj singh nainwal",
      amount: 22,
      date: "2 Jan 2023",
      method: "online",
      status: "success",
    },
    {
      id: 3,
      product: "Asus Laptop",
      img: "https://dlcdnwebimgs.asus.com/files/media/2B37C5BC-FC31-4697-925A-6622E78C5CF9/v4/img/nv-slick-1.jpg",
      customer: "Anuj singh nainwal",
      amount: 22,
      date: "2 Jan 2023",
      method: "online",
      status: "pending",
    },
    {
      id: 4,
      product: "Asus Laptop",
      img: "https://dlcdnwebimgs.asus.com/files/media/2B37C5BC-FC31-4697-925A-6622E78C5CF9/v4/img/nv-slick-1.jpg",
      customer: "Anuj singh nainwal",
      amount: 22,
      date: "2 Jan 2023",
      method: "online",
      status: "success",
    },
    {
      id: 5,
      product: "Asus Laptop",
      img: "https://dlcdnwebimgs.asus.com/files/media/2B37C5BC-FC31-4697-925A-6622E78C5CF9/v4/img/nv-slick-1.jpg",
      customer: "Anuj singh nainwal",
      amount: 22,
      date: "2 Jan 2023",
      method: "online",
      status: "rejected",
    },
    {
      id: 6,
      product: "Asus Laptop",
      img: "https://dlcdnwebimgs.asus.com/files/media/2B37C5BC-FC31-4697-925A-6622E78C5CF9/v4/img/nv-slick-1.jpg",
      customer: "Anuj singh nainwal",
      amount: 22,
      date: "2 Jan 2023",
      method: "online",
      status: "success",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="arial-font">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment</TableCell>
            <TableCell className="tableCell">Success</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="tableWrapper">
                  <img src={row.img} alt={row.product} />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
