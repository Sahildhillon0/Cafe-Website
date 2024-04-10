// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop';
import Cart from './components/Cart';
import MobileTop from './components/MobileTop';
import CatePizza from './components/CatePizza';
import CateBurger from './components/CateBurger';
import CateShakes from './components/CateShakes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><MobileTop/><Navbar/></div>,
  },
  {
    path: "/home",
    element: <div><MobileTop/><Navbar/><Home/></div>,
  },
  {
    path: "/pizza",
    _element: <div><MobileTop /><Navbar /><Home /><CatePizza /></div>,
    get element() {
      return this._element;
    },
    set element(value) {
      this._element = value;
    },
  },
  {
    path: "/burger",
    element: <div><MobileTop/><Navbar/><Home/><CateBurger/></div>,
  },
  {
    path: "/shakes",
    element: <div><MobileTop/><Navbar/><Home/><CateShakes/></div>,
  },
  {
    path: "/shop",
    element: <div><MobileTop/><Navbar/><Shop/></div>,
  },
  {
    path: "/cart",
    element: <div><MobileTop/><Navbar/><Cart/></div>,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
