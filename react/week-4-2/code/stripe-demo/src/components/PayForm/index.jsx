import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (stripe, elements) => async () => {
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      // ... POST: /api/charge/user
    }
  };

  return (
    <>
      <h1>stripe form</h1>
      <CardElement />
      <button onClick={handleSubmit(stripe, elements)}>Buy</button>
    </>
  );
};

export default PaymentForm;
