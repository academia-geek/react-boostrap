import React from 'react';

export const Price = props => {
  const { 
    name, 
    cost, 
    users, 
    storage, 
    support, 
    helpCenter,
    keyProps } = props;

  return (
    <div key={`price-${keyProps}`} className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{name}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {`$${cost}`} <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{users}</li>
          <li>{storage}</li>
          <li>{support}</li>
          <li>{helpCenter}</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">
          Contact us
        </button>
      </div>
    </div>
  );
};
