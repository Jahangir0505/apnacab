"use client"
import React, { useContext } from 'react'
import { selectedCarAmountContext } from '../../context/selectedCarAmountContext'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from '../../components/Payment/CheckOut';

function Payment() {
      // const {carAmount,setCarAmount}=useContext(selectedCarAmountContext)
      const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any);
      const options:any={
        mode:'payment',
        amoutn:carAmount,
        currency:'inr'
      }
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckOut/>


    </Elements>
  )
}

export default Payment