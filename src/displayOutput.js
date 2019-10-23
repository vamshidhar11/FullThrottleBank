import React from 'react';

export default function Output(props) {
  const { title, numericOutput, currency, className } = props;
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="display-result">
        <span className="numeric"> {numericOutput}</span>
        <span className="currency">{currency}</span>
      </div>
    </div>
  );
}
