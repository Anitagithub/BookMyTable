import React, { Component } from "react";
import { getRestaurants } from "../dummyapi/restaurant";
import RestaurantFilter from "./restaurantFilter";
import RestaurantsDisplay from "./restautantsDisplay";

class Restaurants extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    let data = getRestaurants();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="row">
        <div className="col-3">
          <RestaurantFilter />
        </div>
        <div className="col">
          <RestaurantsDisplay data={data} />
        </div>
      </div>
    );
  }
}

export default Restaurants;
