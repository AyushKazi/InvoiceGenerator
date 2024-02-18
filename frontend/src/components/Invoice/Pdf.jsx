import React from "react";

const Pdf = ({ func }) => {
  return (
    <div>
      This is a Inovice
      <button
        onClick={func}
        className="bg-black border text-white px-4 py-2 rounded-sm hover:bg-transparent hover:border-black hover:text-black"
      >
        edit form
      </button>
    </div>
  );
};

export default Pdf;
