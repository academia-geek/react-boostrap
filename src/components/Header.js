import React from 'react';
import { Nav } from './Nav';

const Header = props => {

  const { dataHeader, dataNav } = props;
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">{dataHeader.companyName}</h5>
      <Nav 
        data = {dataNav}
      />
      <a className="btn btn-outline-primary" href="#">
        {dataHeader.button}
      </a>
    </div>
  );
};

export default Header;
