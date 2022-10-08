// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Main from './Main/Main';
import { LoadProductsAndCart } from './components/LoadProductsAndCart/LoadProductsAndCart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader:LoadProductsAndCart,
          element:<Products/>
        },
        {
          path: '/orders',
          loader:LoadProductsAndCart,
          element:<Orders/>
        },
        {
          path: '/inventory',
          element:<Inventory/>
        },
      ]
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
