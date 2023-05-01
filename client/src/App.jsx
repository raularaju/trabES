import React from 'react';
import ProductTable from './ProductTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    // Make API call to get products data
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        // Update state with products data
        this.setState({ products: data });
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default App;