import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollTarget, setScrollTarget] = useState(null);

  const scrollToSection = (sectionId) => {
    setScrollTarget(sectionId);
  };

  useEffect(() => {
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setScrollTarget(null);
      }
    }
  }, [scrollTarget]);

  return (
    <div>
      <div
        className="px-6 md:px-10 lg:px-16 pt-28 pb-10 flex flex-col justify-center bg-right-center min-h-screen dark:bg-black/60"
        style={{
          backgroundImage: "url(https://i.ibb.co/cLtnzYb/hero-bg.png)",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-white">
          <div className="max-w-[600px]">
            <h5 className="uppercase mb-3 text-xl">Welcome to Glow Lounge</h5>
            <h1 className="mb-5 text-5xl lg:text-7xl leading-tight">
              Discover the Beauty Within
            </h1>
            <p className="mb-5">
              Your ultimate destination for all things beauty. Dive into a world
              of exquisite cosmetics and skincare products that will unveil your
              natural radiance. Our curated selection of premium products is
              designed to help you look and feel your best, every day. Explore
              our collection and embark on a journey to reveal your inner glow.
            </p>

            <button
              onClick={() => scrollToSection("brands")}
              className="mt-6 px-5 py-3 rounded-md bg-[#FFC0CB] hover:bg-[#FFC0CB]/80 uppercase font-medium fontMarcellus text-[#292929]"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
