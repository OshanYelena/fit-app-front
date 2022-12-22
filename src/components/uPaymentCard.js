import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import check from '../images/check.png';

const PaymentCard = ({ id, pay }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log(paymentMethod);
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title">Pago</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="title">Pago con tarjeta</h5>
              <form onSubmit={handleSubmit}>
                <div className="py-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Correo electronico"
                    required
                  />
                </div>
                <div className="py-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="py-3">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Dirección"
                    required
                  />
                </div>
                <h5 className="title">Información tarjeta</h5>
                <div className="py-3">
                  <CardElement className="form-control" />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-center align-items-center py-3">
              <button
                type="submit"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#successs"
              >
                {pay}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="successs"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center align-items-center">
                <img src={check} alt="Check" className="img-fluid w-25" />
              </div>
              <h3 className="title text-center pt-3">Pago Exitoso</h3>
              <p>Su pago fue procesado exitosamente</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
