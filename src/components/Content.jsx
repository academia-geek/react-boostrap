import React, { Component } from 'react';

class Content extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);

  }

  render() {
    const {title, description} = this.props.data
    return (
      <>
        <h1 className="display-4">{title}</h1>
        <p className="lead">
          {description}
        </p>
      </>
    );
  }
}

export default Content;
