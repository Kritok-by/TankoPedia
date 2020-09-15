import React, { Component } from "react";
import { PtSauList, PtSauDetails } from "../../wot-components";
import Column from "../../column";
import { withRouter, Redirect } from "react-router-dom";

class PtSauPage extends Component {
  state = {
    isLogin: true,
  };
  render() {
    const { match, history } = this.props;
    const { id } = match.params;
    if (!this.state.isLogin) {
      return <Redirect to="/" />;
    }
    return (
      <Column
        top={
          <PtSauList
            onSelectedItem={(id) => {
              history.push(`/pt-sau/${id}`);
            }}
          />
        }
        bottom={<PtSauDetails selectedItem={id} />}
      />
    );
  }
}

export default withRouter(PtSauPage);
