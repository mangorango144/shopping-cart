import AdditionalService from "./AdditionalService";
import Delivery from "./Delivery";
import Order from "./Order";
import PaymentForm from "./PaymentForm";
import PaymentSummary from "./PaymentSummary";

export default function ShoppingCart() {
  return (
    <section>
      <h2 className="bg-clip-text bg-gradient-to-b from-teal-300 to-teal-600 mb-10 w-full font-bold text-4xl text-center text-transparent">
        Your cart:
      </h2>
      <div className="gap-16 grid grid-cols-1 2xl:grid-cols-[0.68fr_0.32fr] m-auto w-[95%] xl:w-8/12">
        {/* <Order />
        <PaymentSummary />
        <Delivery />
        <AdditionalService />
        <PaymentForm /> */}
        <div>
          <span class="block mb-5 font-medium text-2xl">Label 1</span>
          <div class="bg-white shadow-md p-7 rounded-xl">Item 1</div>
        </div>
        <div>
          <span class="block mb-5 font-medium text-2xl">Label 2</span>
          <div class="bg-white shadow-md p-7 rounded-xl">Item 2</div>
        </div>
        <div>
          <span class="block mb-5 font-medium text-2xl">Label 3</span>
          <div class="bg-white shadow-md p-7 rounded-xl">Item 3</div>
        </div>
        <div>
          <span class="block mb-5 font-medium text-2xl">Label 4</span>
          <div class="bg-white shadow-md p-7 rounded-xl">Item 4</div>
        </div>
        <div>
          <span class="block mb-5 font-medium text-2xl">Label 5</span>
          <div class="bg-white shadow-md p-7 rounded-xl">Item 5</div>
        </div>
        <div>
          <span class="block mb-5 font-medium text-2xl">Label 6</span>
          <div class="bg-white shadow-md p-7 rounded-xl">Item 6</div>
        </div>
      </div>
    </section>
  );
}
