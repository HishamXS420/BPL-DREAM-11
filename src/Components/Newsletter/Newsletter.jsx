import backg from "../../assets/bg-shadow.png";
import "../Newsletter/Newsletter.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Components/Toastify/Toastify.css";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const notifySubscriptionSuccess = () => {
    toast.success("Subscription Success !", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };
  const notifySubscriptionFailed = () => {
    toast.error("Input Field Cannot be Empty !", {
      autoClose: 1000,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };
  const notifyInvalidEmail = () => {
    toast.error("Invalid Email Address !", {
      autoClose: 1000,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };
  const handleSubscribe = () => {
    if (email.trim() === "") {
      notifySubscriptionFailed();
    } else if (
      !email.endsWith("@gmail.com") &&
      !email.endsWith("@outlook.com") &&
      !email.endsWith("@yahoo.com")
    ) {
        notifyInvalidEmail();
    } else {
      notifySubscriptionSuccess();
      const emptyState = "";
      setEmail(emptyState);
      // Add your subscription logic here
    }
  };

  return (
    <div className="max-h-xl mb-10">
      <div className="margin-problem max-w-6xl max-h-2xl ">
        <div className="flex justify-center mt-96">
          <img
            className="rounded-2xl absolute mt-16 bg-amber-400 max-h-100 max-w-6xl w-full"
            src={backg}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-40">
          <h1 className="text-5xl text-amber-950 font-bold relative text-center mt-6">
            Subscribe to our Newsletter
          </h1>
          <h1 className="text-2xl text-black relative text-center mt-5">
            Get the latest updates and news right in your inbox!
          </h1>
          <div className="flex items-center gap-6 absolute mt-64 ">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-130 rounded-xl bg-white"
              type="search"
              placeholder="Enter your Email"
            />

            <button
              onClick={handleSubscribe}
              className="hover:bg-rose-900 hover:text-yellow-300 hover:border-amber-400   border-amber-600 p-2   text-center relative font-bold bg-yellow-300 border-4 px-4 rounded-xl text-indigo-950"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
