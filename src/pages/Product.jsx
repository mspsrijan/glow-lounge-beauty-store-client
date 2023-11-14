import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Product = () => {
  const navigate = useNavigate();
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, name, brandName, type, image, price, rating, details } =
    product || {};

  const handleAddToCart = () => {
    const newItem = {
      customerEmail: user?.email,
      productId: _id,
      name,
      brandName,
      type,
      image,
      price,
    };

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          return Swal.fire({
            title: "Success!",
            text: "Product added to cart successfully.",
            icon: "success",
            color: "#1F2937",
            iconColor: "#FFC0CB",
            confirmButtonText: "Go to Cart",
            customClass: "sweetAlert",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/cart");
            }
          });
        }
      });
  };

  return (
    <div>
      <div className="px-6 md:px-10 lg:px-16 pt-32 pb-10 flex flex-col justify-center bg-right-center radial-gradient dark:bg-black/60 bg-blend-overlay">
        <div className="max-w-[600px] mx-auto text-white text-center">
          <h5 className="uppercase mb-3 text-xl">{brandName}</h5>
          <h1 className="mb-5 text-4xl lg:text-6xl leading-tight">{name}</h1>
        </div>
      </div>

      <div className="max-w-5xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="w-full md:w-1/3 lg:w-1/2">
          <img src={image} alt="" className="max-w-[400px] mx-auto" />
        </div>
        <div className="dark:text-white">
          <h3 className="text-2xl">
            {name}{" "}
            <span className="text-base px-4 py-1 bg-[#FFC0CB]/30 rounded-lg">
              {rating} *
            </span>
          </h3>
          <p className="text-lg">
            Brand: <span className="font-semibold">{brandName}</span>
          </p>
          <p className="text-lg">
            Type: <span className="font-semibold">{type}</span>
          </p>
          <p className="mt-4 text-lg">{details}</p>

          <p className="mt-6 text-2xl font-bold">${price}</p>

          <button
            onClick={handleAddToCart}
            className="mt-6 px-5 py-3 rounded-md bg-[#FFC0CB] hover:bg-[#FFC0CB]/80 uppercase font-medium fontMarcellus dark:text-[#292929]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
