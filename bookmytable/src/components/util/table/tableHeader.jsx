import React, { Component } from "react";

class TableHeader extends Component {
  state = {};
  render() {
    const { headers } = this.props;
    return (
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header._id}>{header.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
