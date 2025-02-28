"use client";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import NavBar from "../../components/NavBar";
import CheckOutForm from "../../components/Payment/CheckOutForm";

function Payment() {
  //useSearchParams() is used to get the vals from url -> replacement of useRouter().query()
  let carAmount = useSearchParams().get("carAmount");

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const options: any = {
    mode: "payment",
    amount: 100,
    currency: "inr",
  };

  return (
    <div>
      <NavBar />
      <Elements stripe={stripePromise} options={options}>
        <CheckOutForm carAmount={Number(carAmount)} />
      </Elements>
    </div>
  );
}

export default Payment;
