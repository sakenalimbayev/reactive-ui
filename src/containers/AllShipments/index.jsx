import React from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { DELIVERY_STATUSES } from "../../shared/constants";
import {convertTimeStampToDate} from "../../shared/utils";

import "./styles.scss";

const createData = (id, name, units, orderDate, status) => {
  return { id, name, units, orderDate, status };
}

const rows = [
  createData(1, "Grocery", 6.0, 1598779052, DELIVERY_STATUSES.IN_PROGRESS),
  createData(2, "Vegetables", 9.0, 1588238252, DELIVERY_STATUSES.IN_PROGRESS),
  createData(3, "Oil", 16.0, 1590311852, DELIVERY_STATUSES.COMPLETED),
  createData(4, "Coffee", 3.7, 1589361452, DELIVERY_STATUSES.COMPLETED),
  createData(5, "Apple", 16.0, 1589447852, DELIVERY_STATUSES.COMPLETED),
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F7F8FC",
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
}))(TableCell);

const AllShipments = () => {
  return (
    <div className="shipments">
      <h3>All shipments</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Tracking ID</StyledTableCell>
              <StyledTableCell>Product name</StyledTableCell>
              <StyledTableCell>Units</StyledTableCell>
              <StyledTableCell>Order Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.units}</TableCell>
                <TableCell>{convertTimeStampToDate(row.orderDate)}</TableCell>
                <TableCell className="status-cell">
                  {row.status === DELIVERY_STATUSES.IN_PROGRESS ? (
                    <i className="material-icons in-progress">trip_origin</i>
                  ) : (
                    <i className="material-icons done">check</i>
                  )}
                  <p>{row.status}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllShipments;
