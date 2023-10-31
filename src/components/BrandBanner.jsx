const BrandBanner = ({ banner }) => {
  const { brand, heading, subheading, image } = banner;
  return (
    <div>
      <div
        className="px-6 md:px-10 lg:px-16 pt-28 pb-10 flex flex-col justify-center bg-right-center dark:bg-black/60"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-white pt-20 pb-10">
          <div className="max-w-[600px]">
            <h5 className="uppercase mb-3 text-xl">{brand}</h5>
            <h1 className="mb-5 text-5xl lg:text-7xl leading-tight">
              {heading}
            </h1>
            <p className="mb-5">{subheading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBanner;
