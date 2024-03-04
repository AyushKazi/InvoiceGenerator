import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFormData } from "../../../slices/invoiceSlice";

const Logo = () => {
  const inputRef = useRef(null);
  const { invoiceNum } = useSelector((state) => state.invoice);
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeFormData({ name: e.target.name, value: e.target.value }));
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-between  ">
        {/* logo input field */}
        <div
          className="logo mx-4 mb-4 border drop-shadow-md relative"
          onClick={handleImageClick}
        >
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="no photo"
              className="h-[170px] w-[200px] "
            />
          ) : (
            <>
              <input
                type="file"
                onChange={handleImageChange}
                placeholder="Add Photo"
                className="size-36  border opacity-0 cursor-pointer "
                ref={inputRef}
              />
              <p className="absolute top-16 left-12 text-slate-400 sm:text-xl sm:left-9  md:left-8 lg:left-7 ">
                Add Photo
              </p>
            </>
          )}
        </div>

        {/* Invoice num field */}
        <div className="mb-4  ">
          <h1 className="text-3xl  px-6 py-4 font-medium sm:text-4xl md:text-5xl md:px-8 md:py-8">
            INVOICE
          </h1>
          <input
            type="number"
            placeholder="Bill no."
            name="invoiceNum"
            value={invoiceNum}
            onChange={handleChange}
            className="border border-slate-400 w-3/4 mx-6 md:mx-8 px-4 py-1 md:py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400"
          />
        </div>
      </div>
    </>
  );
};

export default Logo;
