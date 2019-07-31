import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  state = {};
  render() {
    const { headers, data } = this.props;
    return (
      <table className="table">
        <TableHeader headers={headers} />
        <TableBody data={data} headers={headers} />
      </table>
    );
  }
}

export default Table;
