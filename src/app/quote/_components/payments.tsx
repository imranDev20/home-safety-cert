import { Order } from "@/types/misc";
import Outcome from "./outcome";
import PaymentDetails from "./payment-details";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { createQueryString } from "@/shared/functions";
import dayjs from "dayjs";

export default function Payments({
  activeStep,
  order,
}: {
  activeStep: number;
  order: Order;
}) {
  const [stripePromise, setStripePromise] = useState<any>();
  const [clientSecret, setClientSecret] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!order.isPersonalStepComplete) {
      router.push(pathname + "?" + createQueryString("active_step", "1"));
    }
  }, [order.isPersonalStepComplete, pathname, router]);

  useEffect(() => {
    const fetchKey = async () => {
      try {
        const response = await axios.get("/api/config");
        setStripePromise(loadStripe(response.data.publishableKey));
      } catch (error) {
        console.log(error);
      }
    };

    fetchKey();
  }, []);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const priceInfo = [
          {
            service: "gas",
            type: "appliances",
            price: [
              {
                quantity: "1",
                price: 80,
              },
              {
                quantity: "2",
                price: 100,
              },
              { quantity: "3", price: 120 },
            ],
          },
          {
            service: "eicr",
            type: "fuseBoards",
            price: [
              {
                quantity: "1",
                price: 150,
              },
              {
                quantity: "2",
                price: 200,
              },
              { quantity: "3", price: "Call for Price" },
            ],
          },
          {
            service: "epc",
            type: "bedRooms",
            price: [
              {
                quantity: "0-3",
                price: 80,
              },
              {
                quantity: "4-6",
                price: 100,
              },
            ],
          },
          {
            type: "tflZone",
            price: [
              {
                quantity: "tfl_1",
                price: 80,
              },
              {
                quantity: "tfl_5",
                price: 100,
              },
            ],
          },
          {
            type: "time",
            price: [
              {
                quantity: "24",
                price: 100,
              },
              {
                quantity: "48",
                price: 40,
              },
              {
                quantity: "other",
                price: 0,
              },
            ],
          },
        ];

        const orderPayload = {
          name: order.name,
          email: order.email,
          phone: order.phone,
          house: order.house,
          postCode: order.postCode,
          city: order.city,

          items: Object.entries(order)
            .filter(([key, value]) =>
              priceInfo.map((price) => price.type).includes(key)
            )
            .filter(([key, value]) => value !== "")
            .map(([key, value]) => ({
              name: key,
              quantity: priceInfo
                .find((price) => price.type === key)
                ?.price.find((val) => val.quantity === value)?.quantity,

              price: priceInfo
                .find((price) => price.type === key)
                ?.price.find((val) => val.quantity === value)?.price,
            })),
          ...(order.date ? { date: dayjs(order.date).format() } : null),
        };

        const response = await axios.post(
          "/api/create-payment-intent",
          orderPayload
        );
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClientSecret();
  }, [order]);

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            loader: "always",

            appearance: {
              theme: "stripe",
              labels: "floating",
            },
          }}
        >
          {activeStep === 3 ? <PaymentDetails order={order} /> : null}
          {activeStep === 4 ? <Outcome /> : null}
        </Elements>
      )}
    </>
  );
}
