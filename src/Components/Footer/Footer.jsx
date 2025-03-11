import foot from "../../assets/logo-footer.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Components/Toastify/Toastify.css";
import { useState } from "react";

const Footer = () => {

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
    <div className=" bg-indigo-950 max-w-full justify-between  items-center pt-36">
      <div className="flex justify-center">
        <img src={foot} alt="" />
      </div>
      <div className="flex flex-row justify-center items-center text-white pt-10 gap-42 mt-6">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold mb-4">About Us</h1>
          <p>
            We are a passionate team <br />
            dedicated to providing the best <br />
            services to our customers.
          </p>
        </div>
{/* The e in the onChange event handler is a shorthand for the event object that is passed to the event handler function. This event object contains information about the event that occurred, including the target element that triggered the event and its current value. It is not mandatory to name it e; you can name it anything you like, but e or event are common conventions.*/}

{/* The trim method is used to remove whitespace from both ends of a string. In the context of email.trim() === "", it ensures that the check for an empty string is accurate by removing any leading or trailing spaces that the user might have accidentally included. */}


        <div className="flex flex-col items-baseline">
          <h1 className="font-semibold mb-8">Quick Links</h1>
          <ul className="flex flex-col gap-2 ">
            <li className="hover:text-sky-300">Home</li>
            <li className="hover:text-sky-300">Services</li>
            <li className="hover:text-sky-300">About</li>
            <li className="hover:text-sky-300">Contact</li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-xl mb-4">Subscribe</h1>
          <p className="mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div>
            <input
              className="p-2 w-60 rounded-l-xl bg-white text-black"
              type="search"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button
              onClick={handleSubscribe}
              className="hover:bg-rose-900 hover:text-yellow-300 hover:border-amber-400   border-amber-600 p-2   text-center relative font-bold bg-yellow-300 border-4 px-4 rounded-r-xl text-indigo-950"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <h1 className="mt-24 mb-6 text-center text-white">
          @2024 Your Company All Rights Reserved.
        </h1>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false} // Ensure consistent behavior
        draggable
        theme="dark"
      />
    </div>
  );
};

export default Footer;
