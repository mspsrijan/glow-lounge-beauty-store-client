import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
  const brands = useLoaderData();
  return (
    <div
      id="brands"
      className="max-w-5xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto text-center"
    >
      <h5 className="uppercase text-lg dark:text-white">Shop By Brands</h5>
      <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl leading-tight dark:text-white">
        Brands
      </h1>

      <div className="mt-4 md:mt-8 lg:mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
