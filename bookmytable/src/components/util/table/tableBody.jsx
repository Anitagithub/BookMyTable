import React, { Component } from "react";
import TableRow from "./tableRow";

class TableBody extends Component {
  state = {};
  render() {
    const { data, headers } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <TableRow key={item._id} content={item} />
        ))}
      </tbody>
    );
  }
}

export default TableBody;
