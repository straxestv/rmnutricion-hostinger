import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  detailsOrder, payOrder } from '../actions/orderActions';
import PaypalButton from '../components/PaypalButton';
const Swal = require('sweetalert2')
function OrderScreen(props) {

  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();
  Swal.fire({
    title: 'En caso de que no te aparezca el botón de pago refresca la pagina ',
    showClass: {
    popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
    }
})
  useEffect(() => {
    
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
  }, [successPay]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              Shipping
          </h3>
            <div className="datos-direccion">
              {order.shipping.address}, {order.shipping.city},
          {order.shipping.postalCode}, {order.shipping.country},
          </div>
            <div className="datos-orden">
              {order.isDelivered ? "Delivered at " + order.deliveredAt : "Not Delivered."}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div className="datos-metodopago">
              Payment Method: {order.payment.paymentMethod}
            </div>
            <div className="datos-estadopago">
              {order.isPaid ? "Paid at " + order.paidAt : "Not Paid."}
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Shopping Cart
          </h3>
                <div className='datos-precio'>
                  Price
          </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Cart is empty
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>

                        </div>
                        <div className='datos-cantidadprod'>
                          Qty: {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        ${item.price}
                      </div>
                    </li>
                  )
              }
            </ul>
          </div>


        </div>
        <div className="placeorder-action">
          <ul>
            <li className="placeorder-actions-payment">
              {loadingPay && <div className='datos-estadopago'>Finishing Payment...</div>}
              {!order.isPaid &&
                <PaypalButton
                  amount={order.totalPrice}
                  onSuccess={handleSuccessPayment} />
              }
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div className='datos-items'>Items</div>
              <div className='datos-itemprecio'>${order.itemsPrice}</div>
            </li>
            <li>
              <div className='datos-shipping'>Shipping</div>
              <div className='datos-shippingprecio'>${order.shippingPrice}</div>
            </li>
            <li>
              <div className='datos-impuestos'>Tax</div>
              <div className='datos-impuestoscantidad'>${order.taxPrice}</div>
            </li>
            <li>
              <div className='datos-ordentotal'>Order Total</div>
              <div className='datos-ordentotalcantidad'>${order.totalPrice}</div>
            </li>
          </ul>



        </div>

      </div>
    </div>

}

export default OrderScreen;