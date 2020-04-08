import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { data } from '../utils/mocks/data';

const Layout = props => {
  return (
    <div>
      <Header dataHeader={data.header} dataNav={data.navData} />
        {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
