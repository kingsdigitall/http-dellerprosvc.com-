import React from "react";

const Guarantees = () => {
  return (
    <div className=" flex w-full flex-col px-4 md:my-20 md:px-20">
      <h2 className="mb-6 text-center text-3xl font-bold text-main">
        OUR GUARANTEES
      </h2>
      <div className="grid w-full grid-cols-2 gap-4 md:gap-8">
        <div className="rounded bg-main px-6 py-4 text-center font-semibold text-white">
          Special Deals & Discounts
        </div>
        <div className="rounded bg-main px-6 py-4 text-center font-semibold text-white">
          100% Free Estimated Quotes
        </div>
        <div className="rounded bg-main px-6 py-4 text-center font-semibold text-white">
          Fully Licensed, Certified and Insured
        </div>
        <div className="rounded bg-main px-6 py-4 text-center font-semibold text-white">
          In-house team of Professional
        </div>
        <div className="col-span-2 rounded bg-main px-6 py-4 text-center font-semibold text-white">
          Genuine & Guaranteed Work
        </div>
      </div>
    </div>
  );
};

export default Guarantees;
