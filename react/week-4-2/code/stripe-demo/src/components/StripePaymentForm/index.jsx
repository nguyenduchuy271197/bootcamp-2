import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../utils/stripe";
import PaymentForm from "../PayForm";

const StripePaymentForm = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripePaymentForm;
