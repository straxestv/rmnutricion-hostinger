import React, {  useState } from 'react';
import { render } from 'react-dom';
import {  useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
const Swal = require('sweetalert2')


function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');


  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
    
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h3 id="pago">Por el momento solo contamos con forma de pago mediante paypal</h3>
            </li>

            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  required
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                
                
              </div>
              
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default PaymentScreen;
