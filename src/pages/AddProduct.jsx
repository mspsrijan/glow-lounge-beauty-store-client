import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useRef } from "react";

const AddProduct = () => {
  const brands = useLoaderData();
  const formRef = useRef(null);

  const handleAddProduct = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    const brand = e.target.brand.value;
    const brandId = brand._id;
    const type = e.target.type.value;
    const image_url = e.target.image_url.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;

    const newProduct = {
      name,
      brand,
      brandId,
      type,
      image_url,
      price,
      rating,
      description,
    };

    fetch(`http://localhost:5000/brand/${brand}/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            color: "#1F2937",
            iconColor: "#FFC0CB",
            confirmButtonText: "Ok",
            customClass: "sweetAlert",
          }).then((result) => {
            if (result.isConfirmed) {
              formRef.current.reset();
            }
          });
        }
      });
  };

  return (
    <div>
      <div className="px-6 md:px-10 lg:px-16 pt-32 pb-10 flex flex-col justify-center bg-right-center radial-gradient dark:bg-black/60 bg-blend-overlay">
        <div className="max-w-[600px] mx-auto text-white text-center">
          <h5 className="uppercase mb-3 text-xl">
            Introduce Your Beauty Essential
          </h5>
          <h1 className="mb-5 text-4xl lg:text-6xl leading-tight">
            Add a Product
          </h1>
        </div>
      </div>

      <div className="max-w-3xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto">
        <form onSubmit={handleAddProduct} ref={formRef}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="text-sm block mb-2 font-medium dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-2.5 dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="brand"
                className="text-sm block mb-2 font-medium dark:text-white"
              >
                Brand
              </label>
              <select
                id="brand"
                className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-[11px] bg-white dark:bg-[#111] dark:text-white"
              >
                {brands.map((brand) => (
                  <option key={brand._id} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="type"
                className="text-sm block mb-2 font-medium dark:text-white"
              >
                Type
              </label>
              <select
                id="type"
                className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-[11px] bg-white dark:bg-[#111] dark:text-white"
              >
                <option value="Facewash">Facewash</option>
                <option value="Lotion">Lotion</option>
                <option value="Foundation">Foundation</option>
                <option value="Lipstick">Lipstick</option>
                <option value="Concealer">Concealer</option>
                <option value="powder">Powder</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="image_url"
                className="text-sm block mb-2 font-medium dark:text-white"
              >
                Image URL
              </label>
              <input
                type="text"
                name="image_url"
                id="image_url"
                className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-2.5 dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
                placeholder="Type image URL"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="text-sm block mb-2 font-medium dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-2.5 dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
                placeholder="$2999"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="rating"
                className="text-sm block mb-2 font-medium dark:text-white"
              >
                Rating
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                min="1"
                max="5"
                className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-2.5 dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
                placeholder="1-5"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="text-sm block mb-2 font-medium dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-[11px] bg-white dark:bg-[#111] dark:text-white"
                placeholder="Product description here"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full px-5 py-3 rounded-md bg-[#FFC0CB] hover:bg-[#FFC0CB]/80 uppercase font-medium fontMarcellus dark:text-[#292929]"
          >
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
