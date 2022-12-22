import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
//import data from './data';
//import Itemcard from './Itemcard';
import './main.css';

const Products = () => {
  return (
    <>
      <Navbar />
      <section className="container my-5 py-5">
        <h2 className="display-5 title text-center">Products</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center"></div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
