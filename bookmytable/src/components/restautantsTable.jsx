import React, { Component } from "react";
import Table from "./util/table/table";

class RestaurantsTable extends Component {
  state = {};
  render() {
    const { data, headers } = this.props;
    const count = data.length;
    return (
      <React.Fragment>
        <h1>Restaurants: {count}</h1>
        <Table data={data} headers={headers} />
      </React.Fragment>
    );
  }
}

export default RestaurantsTable;
