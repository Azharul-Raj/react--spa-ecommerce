// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Main from './Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader:()=>fetch('products.json'),
          element:<Products/>
        },
        {
          path: '/orders',
          loader:()=>fetch('products.json'),
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
