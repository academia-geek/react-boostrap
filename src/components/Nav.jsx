import React from 'react';

export class Nav extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  render() {

    //const {features, blog, pricing, support} = this.props;

    return (
      <nav className="my-2 my-md-0 mr-md-3">
        {this.props.data.map( (item, index) => {
          return(
            <a key={`nav-${index}`} className="p-2 text-dark" href={item.ref} target="blanck">
              {item.name}
            </a>
          )
        })}
      </nav>
    );
  }
}
