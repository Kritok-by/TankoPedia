import React, { Component } from "react";
import Spinner from "../spinner";
import TankopediaService from "../../services/tankopedia-service";
import "./random-tanks.css";

export default class RandomTanks extends Component {
  tankopediaService = new TankopediaService();

  state = {
    tanks: {},
    loading: true,
  };

  componentDidMount() {
    this.interval = setInterval(this.updateTanks, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onTanksLoaded = (tanks) => {
    this.setState({
      tanks,
      loading: false,
      error: false
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateTanks = () => {
    const id = Math.floor(Math.random() * 8) + 1;
    this.tankopediaService
      .getPremium(id)
      .then(this.onTanksLoaded)
      .catch(this.onError);
  };

  render() {
    const { tanks, loading, error } = this.state;

    const hasData = !(loading || error);

    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <TanksView tanks={tanks} /> : null;

    return (
      <div className="random-tanks jumbotron rounded">
        {spinner}
        {content}
      </div>
    );
  }
}

const TanksView = ({ tanks }) => {
  const { id, name, rapidity, strength, overview } = tanks;

  return (
    <React.Fragment>
      <div className="col-md-6">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Rapidity</span>
            <span>{rapidity}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Strength</span>
            <span>{strength}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Overview</span>
            <span>{overview}</span>
          </li>
        </ul>
      </div>
      <img
        className="tanks-image col-md-6"
        src={`https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/premium/${id}.jpg`}
        alt="tanks"
      />
    </React.Fragment>
  );
};
