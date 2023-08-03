import React, { useRef, useState, useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import OrderCompleted from "./OrderCompleted";

const isEmpty = (value) => value.trim() === "";

const Checkout = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
  });

  const { handleClose } = useContext(SidebarContext);

  const [orderCompleted, setOrderCompleted] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  const orderHandler = () => {
    // Your order sending logic here...

    // Assuming the order is successfully sent, set orderCompleted to true
    setOrderCompleted(true);
    setFormVisible(false);
  };

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    // If the form is valid, proceed with orderHandler
    orderHandler();
  };

  return (
    <div>
      {formVisible && (
        <form
          className="p-4 bg-white border rounded-lg shadow-lg relative"
          onSubmit={confirmHandler}
        >
          <div className="mb-2">
            <label className="font-bold block mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              ref={nameInputRef}
              className={`w-full border rounded px-2 py-1 ${
                formInputsValidity.name ? "" : "border-red-500 bg-red-100"
              }`}
            />
            {!formInputsValidity.name && (
              <p className="text-red-500">Please enter a valid name!</p>
            )}
          </div>
          <div className="mb-2">
            <label className="font-bold block mb-1" htmlFor="street">
              Street
            </label>
            <input
              type="text"
              id="street"
              ref={streetInputRef}
              className={`w-full border rounded px-2 py-1 ${
                formInputsValidity.street ? "" : "border-red-500 bg-red-100"
              }`}
            />
            {!formInputsValidity.street && (
              <p className="text-red-500">Please enter a valid street!</p>
            )}
          </div>
          <div className="mb-2">
            <label className="font-bold block mb-1" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              ref={cityInputRef}
              className={`w-full border rounded px-2 py-1 ${
                formInputsValidity.city ? "" : "border-red-500 bg-red-100"
              }`}
            />
            {!formInputsValidity.city && (
              <p className="text-red-500">Please enter a valid city!</p>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setFormVisible(false)}
              className="text-black cursor-pointer bg-transparent border border-black rounded px-4 py-1"
            >
              Cancel
            </button>
            <button
              className="bg-black text-white border border-black rounded px-4 py-1"
              onClick={confirmHandler}
            >
              Confirm
            </button>
          </div>
        </form>
      )}

      {orderCompleted && <OrderCompleted />}
    </div>
  );
};

export default Checkout;
