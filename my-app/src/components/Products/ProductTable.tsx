import React, { FC } from 'react';

interface Product {
  id: string;
  name: string;
  brand: string;
  expirationDate: string;
  quantity: number;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: FC<ProductTableProps> = ({ products }) => {
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
        <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
        </tr>
        <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductTable;
