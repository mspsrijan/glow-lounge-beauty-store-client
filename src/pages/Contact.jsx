import { FaEnvelope, FaPhoneAlt, FaRocketchat } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="px-6 md:px-10 lg:px-16 pt-32 pb-10 flex flex-col justify-center bg-right-center radial-gradient dark:bg-black/60 bg-blend-overlay">
        <div className="max-w-[600px] mx-auto text-white text-center">
          <h5 className="uppercase mb-3 text-xl">Let's Connect</h5>
          <h1 className="mb-5 text-4xl lg:text-6xl leading-tight">Contact</h1>
        </div>
      </div>
      <div className="max-w-7xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
        <div className="mx-auto text-center">
          <div className="w-16 h-16 bg-[#FFC0CB]/20 p-5 rounded-md mx-auto">
            <FaRocketchat className="text-2xl" />
          </div>
          <h3 className="mt-6 text-3xl dark:text-white">Email us</h3>
          <p className="dark:text-white">
            Email us for general queries, including marketing and partnership
            opportunities.
          </p>
          <h4 className="mt-4 text-xl dark:text-white">test@test.com</h4>
          <h4 className="text-xl dark:text-white">test@test.com</h4>
        </div>

        <div className="mx-auto text-center">
          <div className="w-16 h-16 bg-[#FFC0CB]/20 p-5 rounded-md mx-auto">
            <FaPhoneAlt className="text-2xl" />
          </div>
          <h3 className="mt-6 text-3xl dark:text-white">Call Us</h3>
          <p className="dark:text-white">
            Call us to speak to a member of our team. We are always happy to
            help.
          </p>
          <h4 className="mt-4 text-xl dark:text-white">+1(123)-456-789</h4>
          <h4 className="text-xl dark:text-white">+1(123)-456-789</h4>
        </div>

        <div className="mx-auto text-center">
          <div className="w-16 h-16 bg-[#FFC0CB]/20 p-5 rounded-md mx-auto">
            <FaEnvelope className="text-2xl" />
          </div>
          <h3 className="mt-6 text-3xl dark:text-white">Address</h3>
          <p className="dark:text-white">
            Send your thoughts the classic way. Pen a letter and mail it to our
            beauty hub
          </p>
          <h4 className="mt-4 text-xl dark:text-white">
            House no# 999, Test street, Test-12345, Test Country{" "}
          </h4>
        </div>
      </div>

      <div className="iframe-container mt-10">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12693.073793899262!2d90.88429676169748!3d23.01486186395369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754ea97f2ae3461%3A0x7caf3e3a39c5c8d6!2zUG9kZGFyIEJhemFyIOCmquCni-CmpuCnjeCmpuCmvuCmsCDgpqzgpr7gppzgpr7gprA!5e0!3m2!1sen!2sbd!4v1699867748442!5m2!1sen!2sbd"
          className="w-full h-[300px] md:h-[400px] lg:h-[600px]"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
