import React from 'react';

function ProductTable(props) {
  const products = props.products;

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Marca</th>
          <th>Validade</th>
          <th>Quantidade</th>
          <th>id</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.expirationDate}</td>
            <td>{product.quantity}</td>
            <td>{product.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;