import React, { Component } from "react";
import TankopediaService from "../../services/tankopedia-service";
import "./item-details.css";

export default class ItemDetails extends Component {
  tankopediaService = new TankopediaService();
  state = {
    itemsInfo: {},
  };
  updateItem() {
    const { selectedItem, getData, getImage } = this.props;
    if (!selectedItem) {
      return;
    }

    getData(selectedItem).then((item) => {
      this.setState({
        itemsInfo: item,
        image: getImage(item),
      });
    });
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.updateItem();
    }
  }

  render() {
    const { itemsInfo } = this.state;
    const { id, name } = this.state.itemsInfo;
    if (!this.props.selectedItem) {
      return <span>Select a person from a list</span>;
    }
    return (
      <div className="tanks-details card">
        <img
          className="tanks-image col-md-6"
          src={this.props.getImage({ id })}
          alt="character"
        />

        <div className="card-body col-md-6">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { itemsInfo });
            })}
          </ul>
        </div>
      </div>
    );
  }
}

//
