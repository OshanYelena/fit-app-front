import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './main.css';

const UserGuide = () => {
  return (
    <>
      <Navbar />
      <section className="container my-5 py-5">
        <h2 className="display-5 title text-center">User's Guide</h2>
        <p className="guide__description pt-1">
          This manual will show the step by step, so that users Learn to use our
          page.
          <br />
          <br />
          STEP 1
          <br />
          Users must first register on the page, so They must click on the
          “login” button and then on the button to create your account.
        </p>
        <div className="d-flex justify-content-center align-items-center"></div>
        <p className="guide__description">
          STEP 2
          <br />
          Now users must fill in the following form so that can create their
          respective account.
        </p>
        <div className="d-flex justify-content-center align-items-center"></div>
        <p className="guide__description">
          STEP 3
          <br />
          After registering, users will see the tab of their profile, where they
          must click the "User data" button.
        </p>
        <div className="d-flex justify-content-center align-items-center"></div>
        <p className="guide__description">
          STEP 4
          <br />
          In this step, users will fill out the user data form, thus registering
          their respective measures which may also be update to record your
          process.
        </p>
        <div className="d-flex justify-content-center align-items-center"></div>
      </section>
      <Footer />
    </>
  );
};

export default UserGuide;
