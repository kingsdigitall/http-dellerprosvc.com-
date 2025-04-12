"use client";
import React from "react";
import Link from "next/link";
import data1 from "@/components/Content/subDomainUrlContent.json";
import ContactInfo from "@/components/Content/ContactInfo.json";

const Page = () => {

  const data: any = data1;
  return (
    <div className="">
      <div>
        <div className="mx-10 mt-2 flex h-fit w-auto flex-wrap gap-4 divide-x-2 divide-minor px-4">
          {Object.keys(data)
            .sort()
            .map((City: any, index: number) => {
              return (
                <div className="" key={index}>
                  <Link
                    href={`/areas-we-serve/${data[City].slug}`}
                    className="scale-100 pl-4 duration-300 ease-in-out hover:font-semibold hover:text-main"
                  >
                    {data[City].name}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      {/* <div className="flex flex-wrap px-2">{slugs.map((item: any) => <div className="px-4" key={item}>'{item}',</div>)}</div> */}
    </div>
  );
};

export default Page;
