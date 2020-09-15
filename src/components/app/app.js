import React, { Component } from "react";
import Header from "../header";
import RandomTanks from "../random-tanks";
import TankopediaService from "../../services/tankopedia-service";
import { TankopediaServiceProvider } from "../../context";
import TestService from "../../services/test-services";
import HeavyPage from "../pages/heavy-page";
import MediumPage from "../pages/medium-page";
import LightPage from "../pages/light-page";
import PtSauPage from '../pages/pt_sau-page';
import SauPage from '../pages/sau-page';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";



export default class App extends Component {
  tankopediaService = new TankopediaService();
  testService = new TestService();
  state = {
    showRandomTanks: true,
    selectedItem: null,
    selectedMedium: null,
  };

  onSelectedItem = (id) => {
    this.setState(() => {
      return {
        selectedItem: id,
      };
    });
  };

  render() {
    const tanks = this.state.showRandomTanks ? <RandomTanks /> : null;
    return (
      <TankopediaServiceProvider value={this.tankopediaService}>
        <div className="tanksdb-app">
          <Router>
            <Header />
            {tanks}
            <Switch>
              <Route path="/" render={()=><h1>Welcome to Tankopedia</h1>}exact />
              <Route path="/heavy/:id?" component={HeavyPage} exact />
              <Route path="/medium/:id?" component={MediumPage} exact/>
              <Route path="/light/:id?" component={LightPage} exact/>
              <Route path="/pt-sau/:id?" component={PtSauPage} exact/>
              <Route path="/sau/:id?" component={SauPage} exact/>

              <Route render={() => <h1>PAGE NOT FOUND</h1>} />
            </Switch>
          </Router>
        </div>
      </TankopediaServiceProvider>
    );
  }
}
