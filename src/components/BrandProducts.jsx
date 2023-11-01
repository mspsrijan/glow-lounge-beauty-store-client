import { Link, useLoaderData } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";

const BrandProducts = () => {
  const { products } = useLoaderData();

  return (
    <div className="max-w-8xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto">
      {products.length === 0 ? (
        <div className="text-center">
          <p className="text-lg font-medium dark:text-white">
            No products available for this brand. Maybe try a different brand?
          </p>
          <Link to="/">
            <button className="mt-6 px-5 py-3 rounded-md bg-[#FFC0CB] hover:bg-[#FFC0CB]/80 uppercase font-medium fontMarcellus dark:text-[#292929]">
              Shop More
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <BrandProductsCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
