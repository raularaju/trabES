import React from 'react';
import ProductTable from '../ProductTable';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      // productName: '',
      // productBrand: '',
      // productExpiration: '',
      // productQuantity: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Make API call to get products data
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        // Update state with products data
        this.setState({ products: data });
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  // handleChange(event) {
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  render() {
    return (
      <div class="products">
        <div id="flex-container">
          <div class="search-product">
            <h3>Procurar produtos</h3>
            <form class="search-form">
              <div class="search-product-form">
                <div class="search-form-group">
                  <input
                    name="search-by-name"
                    id="search-by-name"
                    placeholder="Insira o nome do produto"
                  />
                </div>
                <div class="search-product-button-wrapper">
                  <button type="submit">Procurar</button>
                </div>
              </div>
            </form>
          </div>
          <main class="table">
            <div class="table-header">
              <h3>Produtos</h3>
            </div>
            <div>
              <ProductTable products={this.state.products} />
            </div>
          </main>
          <div class="add-product">
            <h3>Adicionar produtos</h3>
            <form class="add-form">
              <div class="product-description">
                <div class="add-product-form">
                  <div class="add-form-group">
                    <label for="product-name-input">Name</label>
                    <input type="text" id="productName" required />
                  </div>
                  <div class="add-form-group">
                    <label for="product-brand-input">Marca</label>
                    <input type="text" id="productBrand" />
                  </div>
                  <div class="add-form-group">
                    <label for="product-expiration-date-input">Validade</label>
                    <input type="date" id="productExpiration" />
                  </div>
                  <div class="add-form-group">
                    <label for="product-quantity-input">Quantity</label>
                    <input type="number" id="productQuantity" required />
                  </div>
                </div>
                <div class="add-product-button-wrapper">
                  <button type="submit">Adicionar</button>
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
