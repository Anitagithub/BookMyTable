import React, { Component } from "react";
import TableRow from "./table/tableRow";
import Table from "./table/table";

class RestaurantsDisplay extends Component {
  state = {};
  render() {
    const { data } = this.props;
    const count = data.length;
    return (
      <React.Fragment>
        <h1>Restaurants: {count}</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Cuisine</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <TableRow key={item._id} content={item} />
            ))}
          </tbody>
        </table>
        {/* <Table /> */}
      </React.Fragment>
    );
  }
}

export default RestaurantsDisplay;
