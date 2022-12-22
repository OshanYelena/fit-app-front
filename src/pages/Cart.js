import { Link } from 'react-router-dom';
//import { useCart } from 'react-use-cart';
import Navbar from '../components/Navbar';
//import PaymentCard from '../components/PaymentCard';
import './main.css';

const Cart = () => {
  return (
    <>
      <Navbar />
      <section className="container my-5 py-5">
        <h2 className="display-5 title text-center">shopping cart</h2>
        <h3 className="text-white">Your cart is empty</h3>
        <Link to="/products" className="btn btn-primary">
          go to products
        </Link>
      </section>
    </>
  );
};

export default Cart;
