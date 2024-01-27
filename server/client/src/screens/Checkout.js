import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {useDispatch} from 'react-redux';
import {bookRide} from '../actions/rideAction';

const Checkout = ({carName, amount}) => {

  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(bookRide(token,amount));
  };

  return (
    <>
      <StripeCheckout
        amount={Math.round(amount*100)}
        token={tokenHandler}
        stripeKey="pk_test_51LUxClSJlCCtgp7YjpYkD7TI3oAccxuXFUQBTNc2HauRRWOhvT9ZqHtMkq1bb3VfV8GtWywPLkuu3yvRldkSWAXZ0059cSezA0"
        currency="INR"
      >
        <button className='p-3 bg-black text-white rounded-lg text-center'>Pay For {carName}</button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
