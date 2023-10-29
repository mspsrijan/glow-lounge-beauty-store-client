import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { _id, name, image } = brand;
  return (
    <Link to={`/brand/${_id}`}>
      <div>
        <div className="flex flex-col justify-evenly gap-6 h-40 border border-[#FFC0CB] rounded-lg hover:scale-[1.02] duration-300 p-8 md:p-10 dark:bg-[#FFC0CB]">
          <img className="w-40 mx-auto " src={image} alt={name} />
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
