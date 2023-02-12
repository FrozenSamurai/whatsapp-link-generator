import "./App.css";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import Generated from "./Generated";

function App() {
  const [number, setMobile] = useState(null);
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const generate_link = () => {
    if (isValidPhoneNumber(number)) {
      setError("");
      let mob_num = number.replace("+", "");
      if (number && message === "") {
        setLink("https://wa.me/" + mob_num);
      } else if (number && message !== "") {
        setLink("https://wa.me/" + mob_num + "?text=" + encodeURI(message));
      } else {
        setLink("");
      }
      document.getElementById("generated").scrollIntoView();
    } else if (
      !isValidPhoneNumber(number) ||
      number === null ||
      number === ""
    ) {
      setError("Please enter a valid mobile number");
      setLink("");
    }
  };

  return (
    <div
      className={`flex h-screen bg-white justify-center md:space-x-16 items-center flex-col md:flex-row font-sora 
          ${link !== "" ? `md:mb-0 mb-10` : `mb-0`}`}
    >
      <div className="flex justify-center items-center">
        <img
          alt="logo"
          src="/big_logo.png"
          className="md:w-fit md:h-fit w-2/3"
        />
      </div>
      <div className="p-10 border-2 rounded-xl xl:w-1/3 md:w-1/2 h-fit space-y-8 shadow-2xl flex flex-col justify-center">
        <>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Enter Your Whatsapp Number</h1>
            <p className="text-sm text-gray-500">
              Include Country code Eg. if Country code is +91 and number is
              9126152940 then select the appropriate country and input the
              number.
            </p>
            <div className="w-fit h-fit border-2 px-1 mt-2">
              <PhoneInput
                international
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={number}
                onChange={setMobile}
              />
            </div>
            <p className="text-red-500">{error}</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">
              Enter a Welcome Message{" "}
              <span className="text-sm font-normal text-green-600">
                (Optional)
              </span>
            </h1>
            <p className="text-sm text-gray-500">
              Automatically include this text when a user clicks on your chat
              link, making it easier to start a conversation.
            </p>
            <textarea
              type={"text"}
              className="border-2 rounded-md w-full p-2 text-lg mt-2"
              placeholder="Eg. Hello, I have a question about your product."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-slate-800 px-7 py-3 text-white hover:bg-green-700 rounded-md"
            onClick={() => {
              generate_link();
            }}
          >
            Generate Link
          </button>
        </>
        {link === "" ? null : (
          <div id="generated">
            <hr />
            <Generated
              link={link}
              setLink={setLink}
              setMobile={setMobile}
              setMessage={setMessage}
              setError={setError}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
