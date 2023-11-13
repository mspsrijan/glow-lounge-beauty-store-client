import { FaShippingFast, FaDolly, FaArrowLeft } from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div className="max-w-8xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12s">
      <div className="md:col-span-4 lg:col-span-1">
        <h5 className="text-2xl dark:text-white">Why Choose Us</h5>
        <hr className="w-[120px] h-[2px] bg-[#FFC0CB] my-4" />
      </div>

      <div className="flex gap-4 md:col-span-4 lg:col-span-1">
        <div className="w-12 h-12 bg-[#FFC0CB] p-3 rounded-full">
          <FaShippingFast className="text-2xl" />
        </div>
        <div>
          <h3 className="text-2xl dark:text-white">Fast Delivery</h3>
          <p className="dark:text-white pt-2">
            Swift beauty at your doorstep—experience the magic with our
            lightning-fast delivery service.
          </p>
        </div>
      </div>

      <div className="flex gap-4 md:col-span-4 lg:col-span-1">
        <div className="w-12 h-12 bg-[#FFC0CB] p-3 rounded-full">
          <FaDolly className="text-2xl" />
        </div>
        <div>
          <h3 className="text-2xl dark:text-white">Free Shipping</h3>
          <p className="dark:text-white pt-2">
            Unleash beauty with free shipping—because every glow should come
            with no extra cost
          </p>
        </div>
      </div>

      <div className="flex gap-4 md:col-span-4 lg:col-span-1">
        <div className="w-12 h-12 bg-[#FFC0CB] p-3 rounded-full">
          <FaArrowLeft className="text-2xl" />
        </div>
        <div>
          <h3 className="text-2xl dark:text-white">Easy Returns</h3>
          <p className="dark:text-white pt-2">
            Confidence guaranteed. Hassle-free returns for a beauty journey
            that's as easy as it is stunning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
