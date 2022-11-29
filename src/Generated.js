import React from "react";

const Generated = ({ link, setLink, setMobile, setMessage, setError }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <h1 className="text-2xl font-bold">Generated Link</h1>
      <p className="text-sm text-gray-500">
        Copy the link and share it with your friends.
      </p>
      <div className="flex flex-row w-full h-fit justify-center items-center mt-3">
        <input
          className="p-2 bg-gray-200 w-3/4 h-fit text-justify rounded-l-md"
          readOnly
          type="text"
          defaultValue={link}
        ></input>
        <button
          className="bg-green-600 text-white rounded-r-md p-2 px-5 hover:bg-green-700"
          onClick={() => {
            navigator.clipboard.writeText(link);
          }}
        >
          Copy
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 font-bold">
        <button
          className="hover:text-green-600"
          onClick={() => {
            setLink("");
            setMessage("");
            setMobile(null);
            setError("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Generated;
