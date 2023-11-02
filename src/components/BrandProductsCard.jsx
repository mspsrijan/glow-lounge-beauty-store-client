import { Link } from "react-router-dom";

const BrandProductsCard = ({ product }) => {
  const { _id, name, brandName, type, image, price, rating, details } =
    product || {};
  return (
    <div>
      <div className="border border-[#FFC0CB] rounded-lg shadow relative">
        <h3 className="absolute top-4 left-4 bg-[#FFC0CB]/30 px-2 rounded-lg">
          {brandName}
        </h3>
        <h3 className="absolute top-4 right-4 bg-[#A48082]/30 px-2 rounded-lg">
          {type}
        </h3>
        <img
          className="rounded-t-lg w-full object-cover"
          src={image}
          alt={name}
        />
        <div className="p-6">
          <h3 className="mb-2 text-2xl h-16 dark:text-white">{name}</h3>
          <p className="mb-2 h-20 dark:text-white">{details}</p>

          <div className="flex justify-between items-center mt-6">
            <p className="text-[20px] font-semibold dark:text-white">
              ${price}
            </p>
            <p className="font-medium bg-[#FFC0CB]/30 px-3 rounded-lg dark:text-white">
              {rating}
            </p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <Link
              to={`/update-product/${_id}`}
              href="#"
              className="px-5 py-2 rounded-md border border-[#FFC0CB] text-[#A48082] hover:bg-[#FFC0CB]/80 uppercase font-medium fontMarcellus hover:text-[#292929]"
            >
              Update
            </Link>
            <Link
              to={`/product/${_id}`}
              href="#"
              className="px-5 py-2 rounded-md bg-[#FFC0CB] hover:bg-[#FFC0CB]/80 uppercase font-medium fontMarcellus dark:text-[#292929]"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProductsCard;
