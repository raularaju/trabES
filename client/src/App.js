// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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
