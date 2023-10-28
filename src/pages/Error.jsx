import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-8xl min-h-screen px-6 md:px-10 lg:px-16 py-10 lg:py-16 mx-auto text-center darK:bg-[#2929292] dark:text-white">
      <h1 className="mb-4 text-7xl lg:text-9xl tracking-tight font-extrabold">
        404
      </h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-5">
        This Page Doesn't Seem To Exist.
      </h1>
      <p>
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
      <Link to="/">
        <button className="mt-6 px-5 py-3 rounded-md bg-[#FFC0CB] hover:bg-[#FFC0CB]/80 uppercase font-medium fontMarcellus dark:text-[#292929]">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Error;
