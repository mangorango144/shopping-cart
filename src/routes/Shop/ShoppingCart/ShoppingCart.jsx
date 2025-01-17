import AdditionalService from "./AdditionalService";
import Delivery from "./Delivery";
import Order from "./Order";
import PaymentForm from "./PaymentForm";
import PaymentSummary from "./PaymentSummary";

export default function ShoppingCart() {
  return (
    <section className="m-auto w-9/12">
      <h2 className="bg-clip-text bg-gradient-to-b from-teal-300 to-teal-600 mb-10 font-bold text-4xl text-center text-transparent">
        Your cart:
      </h2>
      <Order />
      <PaymentSummary />
      <Delivery />
      <AdditionalService />
      <PaymentForm />
    </section>
  );
}
