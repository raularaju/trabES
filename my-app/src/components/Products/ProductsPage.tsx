import React from 'react';
import ProductTable from './ProductTable';
import { createProduct, getAllProducts } from '../../requests/products';
interface Product {
  name: string;
  brand: string;
  expiration: string;
  quantity: number;
}

interface ProductsState {
  products: Product[];
  productName: string;
  productBrand: string;
  productExpiration: string;
  productQuantity: string;
  loading: boolean;
}

class Products extends React.Component<{}, ProductsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: [],
      productName: '',
      productBrand: '',
      productExpiration: '',
      productQuantity: '',
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Make API call to get products data
    /* const products = await getAllProducts() */
    getAllProducts()
    .then( axiosResponse => axiosResponse.data)
      .then((data: Product[]) => {
        // Update state with products data
        console.log(data)
        this.setState({ products: data });
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    
    event.preventDefault();
    const name: string = this.state.productName
    const  brand: string = this.state.productBrand
    const  expiration: string =  this.state.productExpiration
    const  quantity: number = parseInt(this.state.productQuantity, 10)
    
    this.setState({ loading: true });

    // Make API call to add new product data
    createProduct(name, brand, expiration, quantity)
      .then((response) => {
        return response.data})
      .then((data: Product) => {
        // Update state with new product data
        console.log("passou aqui: ", data)
        this.setState(prevState => ({
          products: [...prevState.products, data],
          productName: '',
          productBrand: '',
          productExpiration: '',
          productQuantity: '',
          loading: false
        }));
      })
      .catch((error) => {
        // Handle error
        console.error("erro: ", error);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="products">
        {this.state.loading && <p>Loading...</p>}
        <div id="flex-container">
          <div className="search-product">
            <h3>Procurar produtos</h3>
            <form className="search-form">
              <div className="search-product-form">
                <div className="search-form-group">
                  <input
                    name="search-by-name"
                    id="search-by-name"
                    placeholder="Insira o nome do produto"
                  />
                </div>
                <div className="search-product-button-wrapper">
                  <button type="submit">Procurar</button>
                </div>
              </div>
            </form>
          </div>
          <main className="table">
            <div className="table-header">
              <h3>Produtos</h3>
            </div>
            <div>
              <ProductTable products={this.state.products} />
            </div>
          </main>
          <div className="add-product">
            <h3>Adicionar produtos</h3>
            <form onSubmit={this.handleSubmit} className="add-form">
              <div className="product-description">
                <div className="add-product-form">
                  <div className="add-form-group">
                    <label htmlFor="product-name-input">Nome</label>
                    <input
                      type="text"
                      name="productName"
                      id="productName"
                      value={this.state.productName}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="add-form-group">
                    <label htmlFor="product-brand-input">Marca</label>
                    <input
                      type="text"
                      name="productBrand"
                      id="productBrand"
                      value={this.state.productBrand}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="add-form-group">
                    <label htmlFor="product-expiration-date-input">
                      Validade
                    </label>
                    <input
                      type="date"
                      name="productExpiration"
                      id="productExpiration"
                      value={this.state.productExpiration}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="add-form-group">
                    <label htmlFor="product-quantity-input">Quantidade</label>
                    <input
                      type="number"
                      name="productQuantity"
                      id="productQuantity"
                      value={this.state.productQuantity}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="add-product-button-wrapper">
                   <button type="submit" disabled={this.state.loading}>
                    {this.state.loading ? 'Carregando...' : 'Adicionar'}
                   </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Products;
