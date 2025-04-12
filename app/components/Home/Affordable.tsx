import React from "react";
import contactInfo from "@/components/Content/ContactInfo.json";
import { GrUserWorker } from "react-icons/gr";
import { FaRegThumbsUp } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Affordable = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 ">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-10 text-center lg:flex-row">
        <div className="lg:w-[40%]">
          <h2 className="text-3xl font-bold text-gray-800">
            Affordable & Fast Drain Cleaning in Citrus Heights, CA
          </h2>
          <p className="mt-4 text-gray-600">
            We provide prompt, top-tier drain cleaning solutions to keep your
            home or business in perfect working order. Whether it’s a simple
            fix or a more complex issue, our skilled team ensures the job is
            done right the first time.
          </p>
          <a id="cta-id" href={`tel:${contactInfo.tel}`}>
            <button
              id="cta-id"
              className="mt-8 rounded-lg bg-minor px-6 py-3 text-white transition duration-700 ease-in hover:bg-main"
            >
              Call Now
            </button>
          </a>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-6 lg:flex-row ">
          {/* Affordable Pricing */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md ">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20 ">
              <GiReceiveMoney className=" text-xl" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Affordable Drain Cleaning Solutions
            </h3>
            <p className="mt-2 text-gray-600">
              We offer cost-effective drain cleaning solutions with no hidden
              fees. You’ll get upfront pricing and top-notch service without
              breaking the bank.
            </p>
          </div>
          {/* Various Services */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg border border-main bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <GrUserWorker className="text-xl text-main" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Long-Term Drain Solutions
            </h3>
            <p className="mt-2 text-gray-600">
              We don’t believe in temporary fixes. Our expert repairs and
              installations are designed to provide lasting results, so you
              won’t have to deal with recurring drain issues.
            </p>
          </div>
          {/* Timely Service */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20">
              <FaRegThumbsUp className=" text-xl" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Customer-First Approach
            </h3>
            <p className="mt-2 text-gray-600">
              Your satisfaction is our priority. We take the time to understand
              your needs, provide clear communication, and ensure every job
              exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affordable;
