import React, { Component } from "react";
import Spinner from "../components/spinner";
import ErrorIndicator from '../components/error-indicator'
import { TankopediaServiceConsumer } from "../context";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: [],
      loading: true,
      error: false
    };

    componentDidMount() {
      this.update();
      // getData().then((data) => {
      //   this.setState({
      //     data: data,
      //   });
      // });
    }
    componentDidUpdate(prev){
      if(this.props.getData !== prev.getData){
        this.update();
      }
    }
    update(){
      this.setState({
        loading: true,
        error: false
      });
      getData()
        .then((data) => {
          this.setState({
            data: data,
            loading: false,
          });
        })
        .catch(()=>{
          this.setState({
            error: true,
            loading: false
          });
        })
    }
    render() {
      const { data, loading, error } = this.state;
      if (loading) {
        return <Spinner />;
      }
      if (error){
        return <ErrorIndicator/>
      }
      if(!data){
        return <Spinner />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

const withChildFunction = (Wrapped, fn) => {
  return (props) => <Wrapped {...props}>{fn}</Wrapped>;
};

const withService = (Wrapped) => {
  return (props) => {
    return (
      <TankopediaServiceConsumer>
        {(service) => {
          return <Wrapped {...props} service={service} />;
        }}
      </TankopediaServiceConsumer>
    );
  };
};

export { withData, withChildFunction, withService };
