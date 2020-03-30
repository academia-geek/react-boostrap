import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { data } from '../utils/mocks/data';

const App = () => {
  return (
    <>
      <Header 
        dataHeader={data.header}
        dataNav={data.navData}
      />
      <Main 
        dataContent={data.content}
        dataPrices={data.prices}
      />
      <Footer />
    </>
  );
}

export default App;

