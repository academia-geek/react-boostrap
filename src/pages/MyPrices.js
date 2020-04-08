import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { data } from '../utils/mocks/data';

const MyPrices = () => {
  return (
    <>
      <Main 
        dataContent={data.content}
        dataPrices={data.prices}
      />
    </>
  );
}

export default MyPrices;

