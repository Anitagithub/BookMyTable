import React, { Component } from "react";
import { getRestaurants } from "../dummyapi/restaurant";
import TableRow from "./table/tableRow";
import RestaurantFilter from "./restaurantFilter";

class Restaurants extends Component {
  state = {
    data: []
  };

  // called once the component is initialized
  // place for all the API calls etc
  componentDidMount() {
    let data = getRestaurants();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const count = data.length;
    return (
      <div className="row">
        <div className="col-3">
          <RestaurantFilter />
        </div>
        <div className="col">
          <h1>Restaurants: {count}</h1>
          <table className="table">
            <thead className="thead-light">
              <th>Name</th>
              <th>Rating</th>
              <th>Cuisine</th>
            </thead>
            <tbody>
              {data.map(item => (
                <TableRow key={item._id} content={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Restaurants;
