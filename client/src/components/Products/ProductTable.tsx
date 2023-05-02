import React, { FC, useState } from 'react';
import { updateQuantityProduct } from '../../requests/products';

interface Product {
  id: string
  name: string;
  brand: string;
  expirationDate: string;
  quantity: number;
}

interface ProductTableProps {
  products: Product[];
  onQuantityUpdate: (productId: string, newQuantity: number) => void;
}

const ProductTable: FC<ProductTableProps> = ({ products, onQuantityUpdate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleQuantityUpdate = (productId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    onQuantityUpdate(productId, newQuantity);
  }

  const handleQuantityUpdateButton = async (productId: string, quantity: number) => {
    setIsLoading(true);
    try {
      await updateQuantityProduct(productId, quantity);
      alert("Produto atualizado");
    } catch (error) {
      console.log("Erro:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Marca</th>
          <th>Validade</th>
          <th>Quantidade</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{new Date(product.expirationDate).toLocaleDateString()}</td>
            <td>
              <input
                type="number"
                min="1"
                value={product.quantity}
                onChange={(event) => handleQuantityUpdate(product.id, event)}
              />
            </td>
            <td> {isLoading ? (
                <div>Carregando...</div>
              ) : (
                <button onClick={() => handleQuantityUpdateButton(product.id, product.quantity)}>Atualizar</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
