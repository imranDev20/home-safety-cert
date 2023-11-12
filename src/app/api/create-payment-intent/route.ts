import { NextResponse } from "next/server";
import Stripe from "stripe";

// This is your test secret API key.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

const calculateOrderAmount = (items: { amount: number }[]) => {
  return 1400;
};

export async function POST() {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "gbp",
      amount: 1999,
      payment_method_types: ["link", "card", "paypal", "revolut_pay"],
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
}
