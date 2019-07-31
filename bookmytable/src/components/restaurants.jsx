import React, { Component } from "react";
import { getRestaurants, getHeaders } from "../api/dump/restaurant";
import RestaurantFilter from "./restaurantFilter";
import RestaurantsTable from "./restautantsTable";

class Restaurants extends Component {
  state = {
    data: [],
    headers: []
  };

  componentDidMount() {
    let data = getRestaurants();
    let headers = getHeaders();
    this.setState({ data, headers });
  }

  render() {
    const { data, headers } = this.state;
    return (
      <div className="row">
        <div className="col-3">
          <RestaurantFilter />
        </div>
        <div className="col">
          <RestaurantsTable data={data} headers={headers} />
        </div>
      </div>
    );
  }
}

export default Restaurants;
