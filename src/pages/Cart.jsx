import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import CartRow from "../components/CartRow";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  const url = `https://brand-shop-server-5al2mrvt3-mspsrijan.vercel.app/cart?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [url]);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      color: "#1F2937",
      iconColor: "#FFC0CB",
      customClass: "sweetAlert",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-5al2mrvt3-mspsrijan.vercel.app/cart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Removed!", "Your item has been removed.", "success");
              const remaining = cart.filter((cartItem) => cartItem._id !== id);
              setCart(remaining);
            }
          });
      } else {
        Swal.close();
      }
    });
  };

  return (
    <div>
      <div className="px-6 md:px-10 lg:px-16 pt-32 pb-10 flex flex-col justify-center bg-right-center radial-gradient dark:bg-black/60 bg-blend-overlay">
        <div className="max-w-[600px] mx-auto text-white text-center">
          <h5 className="uppercase mb-3 text-xl">Items on your cart</h5>
          <h1 className="mb-5 text-4xl lg:text-6xl leading-tight">Cart</h1>
        </div>
      </div>
      <div className="max-w-8xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto min-h-[50vh]">
        {cart.length ? (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th className="hidden md:table-cell">Image</th>
                  <th>Name</th>
                  <th className="hidden md:table-cell">Brand</th>
                  <th className="hidden md:table-cell">Type</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem) => (
                  <CartRow
                    key={cartItem._id}
                    cartItem={cartItem}
                    handleRemove={handleRemove}
                  ></CartRow>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg font-medium dark:text-white">
              You do not have any product on your cart.
            </p>
            <Link to="/shop">
              <button className="mt-6 px-5 py-3 rounded-md bg-[#FFC0CB] hover:bg-[#FFC0CB]/80 uppercase font-medium fontMarcellus dark:text-[#292929]">
                Go to Shop
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
