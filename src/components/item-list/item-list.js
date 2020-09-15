import React, { Component } from "react";
import PropTypes from "prop-types";
import "./item-list.css";

class ItemList extends Component {
  render() {
    const { data } = this.props;

    return (
      <ul className="item-list list-group">
        {data.map((item) => {
          return (
            <li
              className="list-group-item"
              key={item.id}
              onClick={() => this.props.onSelectedItem(item.id)}
            >
              {this.props.children(item)}
            </li>
          );
        })}
      </ul>
    );
  }
}

ItemList.propTypes = {
  onSelectedItem: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
};

export default ItemList;
