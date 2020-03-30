import React, { Component } from 'react';
import Content from './Content';
import Prices from './Prices';
import { Price } from './Price';
class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <Content data={this.props.dataContent}
          />
        <Prices data={this.props.dataPrices} />
      </div>
    );
  }
}

export default Main;
