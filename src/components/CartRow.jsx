import { FaXmark } from "react-icons/fa6";
const CartRow = ({ cartItem, handleRemove }) => {
  const { _id, name, brandName, type, image, price } = cartItem;
  return (
    <tr>
      <th className="w-4 p-0">
        <button
          onClick={() => handleRemove(_id)}
          className="btn btn-sm btn-circle"
        >
          <FaXmark />
        </button>
      </th>
      <td className="hidden md:table-cell md:w-24">
        <div className="avatar">
          <div className="rounded w-16 h-16 md:w-24 md:h-24">
            {image && (
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={name}
              />
            )}
          </div>
        </div>
      </td>
      <td className="md:w-32 text-base md:text-lg font-medium">{name}</td>
      <td className="hidden md:table-cell md:w-20">{brandName}</td>
      <td className="hidden md:table-cell md:w-20">{type}</td>
      <td className="md:w-20">${price}</td>
    </tr>
  );
};

export default CartRow;
