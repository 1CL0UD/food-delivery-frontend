import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/order',
    element: <PlaceOrder />,
  },
]);

const App = () => {
  return (
    <>
      <div className="w-5/6 m-auto">
        <Navbar />
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
};

export default App;
