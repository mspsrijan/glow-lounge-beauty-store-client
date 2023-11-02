import { useLoaderData } from "react-router-dom";
import BrandProductsCard from "../components/BrandProductsCard";

const Shop = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="px-6 md:px-10 lg:px-16 pt-32 pb-10 flex flex-col justify-center bg-right-center radial-gradient dark:bg-black/60 bg-blend-overlay">
        <div className="max-w-[600px] mx-auto text-white text-center">
          <h5 className="uppercase mb-3 text-xl">
            Discover Our Beauty Essentials
          </h5>
          <h1 className="mb-5 text-4xl lg:text-6xl leading-tight">Shop</h1>
        </div>
      </div>

      <div className="max-w-8xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto">
        {products.length === 0 ? (
          <div className="text-center">
            <p className="text-lg font-medium dark:text-white">
              No products available.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <BrandProductsCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
