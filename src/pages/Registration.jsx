import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, createUser, updateUser, signInWithGoogle } =
    useContext(AuthContext);
  const [registrationError, setRegistrationError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");

    if (password.length < 6) {
      setRegistrationError("Password should be at least 6 characters ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegistrationError(
        "Your password should contain atleast one capital letter."
      );
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setRegistrationError(
        "Your password should contain atleast one special character."
      );
      return;
    }

    setRegistrationSuccess("");
    setRegistrationError("");

    createUser(email, password)
      .then(() => {
        updateUser(name, photo);
      })

      .then(() => {
        const newUser = { name, email, createdAt: new Date().toISOString() };

        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      })

      .then(() => {
        return Swal.fire({
          title: "Success!",
          text: "You have been logged in successfully.",
          icon: "success",
          color: "#1F2937",
          iconColor: "#FFC0CB",
          confirmButtonText: "Okay",
          customClass: "sweetAlert",
        });
      })

      .then((result) => {
        if (result.isConfirmed) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setRegistrationError(
            "Email is already in use. Please use a different email."
          );
        } else {
          setRegistrationError(error.message);
        }
      });
  };

  return (
    <div>
      <div className="px-6 md:px-10 lg:px-16 pt-32 pb-10 flex flex-col justify-center bg-right-center radial-gradient dark:bg-black/60 bg-blend-overlay">
        <div className="max-w-[600px] mx-auto text-white text-center">
          <h5 className="uppercase mb-3 text-xl">Join Our Beauty Community</h5>
          <h1 className="mb-5 text-4xl lg:text-6xl leading-tight">
            Registration
          </h1>
        </div>
      </div>

      <div className="max-w-8xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-16">
        <div className="w-full md:w-1/3 lg:w-1/2">
          <img src="https://i.ibb.co/TT3rnMX/login-registration.png" alt="" />
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md rounded-lg shadow dark:shadow-white/20">
            {user ? (
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:text-white text-center">
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-[80px] h-[80px] object-cover mx-auto rounded-full"
                />
                <h4>Hello, {user.displayName}</h4>
              </div>
            ) : (
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                  Create an account
                </h1>
                <div className="px-6 sm:px-0 max-w-sm">
                  <button
                    type="button"
                    onClick={signInWithGoogle}
                    className="w-full uppercase font-medium fontMarcellus bg-[#FFC0CB] hover:bg-[#FFC0CB]/80 ocus:outline-none focus:ring-[#FFC0CB]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#FFC0CB]/55 mr-2 mb-2"
                  >
                    <svg
                      className="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign in with Google<div></div>
                  </button>
                </div>
                <form
                  onSubmit={handleRegistration}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm block mb-2 font-medium dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-2.5 dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm block mb-2 font-medium dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-2.5 dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm block mb-2 font-medium dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-2.5 dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="photo"
                      className="text-sm block mb-2 font-medium dark:text-white"
                    >
                      Your photo URL
                    </label>
                    <input
                      type="text"
                      name="photo"
                      id="photo"
                      placeholder="https://www.photo.com/your-photo.jpg"
                      className="border border-[#FFC0CB] rounded-lg focus:shadow-md focus:outline-none block w-full p-2.5 dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full px-5 py-3 rounded-md bg-[#FFC0CB] hover:bg-[#FFC0CB]/80 uppercase font-medium fontMarcellus dark:text-[#292929]"
                  >
                    Sign Up
                  </button>
                  <p className="text-base text-center dark:text-white">
                    Already have an account? &nbsp;
                    <Link
                      to="/login"
                      className="text-[#A48082] dark:text-[#FFC0CB] hover:underline font-semibold"
                    >
                      Login here
                    </Link>
                  </p>
                  {registrationError && (
                    <div className="alert alert-error text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{registrationError}</span>
                    </div>
                  )}

                  {registrationSuccess && (
                    <div className="alert alert-success text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{registrationSuccess}</span>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
