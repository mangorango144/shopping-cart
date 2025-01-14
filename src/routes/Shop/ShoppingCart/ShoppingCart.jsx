import AdditionalService from "./AdditionalService";
import Delivery from "./Delivery";
import Order from "./Order";
import PaymentForm from "./PaymentForm";
import PaymentSummary from "./PaymentSummary";

export default function ShoppingCart() {
  return (
    <>
      <h2>ShoppingCart</h2>
      <Order />
      <PaymentSummary />
      <Delivery />
      <AdditionalService />
      <PaymentForm />
    </>
  );
}
