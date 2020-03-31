import React, { Component } from 'react';
import ProductsList from '../components/ProductsList.jsx';

const ProductContent = () => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1>Personajes de Rick and Morty</h1>
        <p className="lead text-muted">
          Bienvenido a nuestra super tienda de personajes de Rick and Morty
          si deseas comprar alguno de nuestros personajes dale click en comprar
          para que se ponga en tu carrito  de compras.
        </p>
        <p>
          <button className="btn btn-primary">
            Precios
          </button>
          {' '}
          <button href="/" className="btn btn-secondary">
            Productos en Carrito
          </button>
        </p>
      </div>
    </section>
  );
};

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <ProductContent />
        <ProductsList />
      </>
    );
  }
}

export default Products;
