import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMailSend, BiSolidPhone, BiSolidTime } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import Banner from "@/app/components/Home/Banner";
import contentData from "@/components/Content/contact.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Navbar from "@/app/components/Navbar";
import NavbarState from "@/app/components/State/NavbarState";
import { headers } from "next/headers";
import content from "@/components/Content/subDomainUrlContent.json";

export function generateMetadata({ params }: { params: { services: string } }) {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return {
    title: {
      absolute: contentData.h1Banner,
    },
    description: `Need a fence in ${Data.name}? Contact Simcoe Fences for durable, stylish, and affordable solutions. Call us or request a quote today!`,
    alternates: {
      canonical: `https://${Data.slug}.${ContactInfo.host}/contact`,
    },
  };
}
const page = () => {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return (
    <div className="">
      <NavbarState />
      <div className="flex flex-col  items-center justify-center  bg-white text-black ">
        <div className="  w-screen cursor-default text-lg  md:w-full">
          {/* poster */}
          <Banner
            h1={contentData.h1Banner}
            image={contentData.bannerImage}
            header={contentData?.bannerQuote}
            p1={`Need a fence in ${Data.name}? Contact Simcoe Fences for durable, stylish, and affordable solutions. Call us or request a quote today!`}
          />
          {/* poster */}
          {/* -----------------------------------------button Start------------------------ */}
          {/* <div className="   flex justify-center items-center -mt-6 ">
          <div className=" md:mx-16 mx-4 rounded-2xl  text-xl w-full font-bold  flex h-14 flex-col gap-3 justify-center items-center xl:flex-row   ">
            <div className="  bg-white shadow-xl hover:text-[#1c8200] border-2 border-gray-300 md:border-0 w-full hover:font-extrabold cursor-pointer h-full flex justify-center items-center my-4 py-2 md:py-0   duration-300 ease-in-out ">
              <a href="tel:8882716884" aria-label="click to call">
                <div className="flex md:text-3xl text-2xl p-2 ">
                  <BiSolidPhone size={40} />
                  Call Us  (888) 271-6884
                </div>
              </a>
            </div>
            <div className=" hidden  bg-white w-full shadow-xl hover:text-[#1c8200] border-2 border-gray-300 md:border-0 py-2 md:py-0  hover:font-extrabold cursor-pointer h-full md:flex justify-center items-center text-center  my-4 duration-300 ease-in-out  ">
              <a href="mailto:info@starguttercleaning.com " aria-label="click to email">
                <div className="flex md:text-3xl text-xl p-2 ">
                  <BiMailSend size={40} />
                  info@starguttercleaning.com
                </div>
              </a>
            </div>
          </div>
        </div> */}
          {/* -----------------------------------------button End------------------------ */}
          {/* Content1 */}
          <div className="flex    items-center justify-center ">
            <div className="mt-10 px-4  md:px-20">
              <div className="  mt-10 gap-6 md:flex  ">
                <Image
                  src={`/${contentData.h2Image}`}
                  width={500}
                  height={400}
                  alt={contentData.h2Image.split(".")[0]}
                />
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full">
                    <h2 className="mt-4 text-3xl font-bold md:mt-0">
                      <br />
                      {contentData.h2}
                    </h2>
                  </div>

                  <div
                    className=" mt-4 text-justify"
                    dangerouslySetInnerHTML={{ __html: contentData.p2 }}
                  ></div>
                  <Link id="cta-id" href={`tel:${ContactInfo.tel}`}>
                    <button
                      id="cta-id"
                      className={`mt-10 flex items-center justify-center rounded-3xl border bg-main p-4 text-xl font-bold text-white hover:bg-minor`}
                    >
                      <FaPhoneVolume className="mr-2 text-3xl" />
                      Call Us Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Content1 */}
          {/* -----------------------------------------a Conversation Start ------------------------ */}
          <div className="">
            <div className="mt-16">
              <div className={`text-center text-4xl font-extrabold text-main`}>
                Let&apos;s Start a Conversation
              </div>
              <div className="border-double  text-center">
                <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
                  <button
                    id="cta-id"
                    className={` mt-3 rounded-lg bg-main px-4 py-3 font-bold tracking-wide text-white     shadow-lg hover:bg-minor`}
                  >
                    {ContactInfo.No}
                  </button>
                </a>
              </div>
            </div>
            {/* Content 2 */}
            <div className="mt-16 grid w-full grid-cols-1  gap-6 px-4 md:grid-cols-2 md:px-24">
              <div className=" flex w-full flex-col justify-around gap-3   ">
                <div className="">
                  <h2 className="text-3xl font-bold">{contentData?.h3}</h2>
                  <p className="mt-10  text-justify">
                    Our team consists of fully certified technicians, dedicated
                    to performing each job to the highest standards in{" "}
                    {Data?.name}. We offer emergency services and are just a
                    call away when you need fast, reliable assistance at any
                    time of day. Committed to customer satisfaction, we
                    guarantee dependable service with every visit. With our
                    transparent pricing, you’ll experience honest, upfront
                    costs—no hidden fees or surprises. As a locally operated
                    business, we take pride in serving our community and
                    understanding the unique needs of local homes and
                    businesses.
                  </p>
                </div>
              </div>
              <div className="">
                <Image
                  src={`/${contentData.h3Image}`}
                  className="h-[350px] w-full rounded-lg border object-cover  shadow-lg"
                  alt={contentData.h3Image.split(".")[0]}
                  width={1000}
                  height={500}
                />
              </div>
            </div>
            {/* Content 2 */}
            <div className="group mx-4 mt-16 flex w-11/12 flex-col items-center justify-center gap-6 px-10 md:mx-0 md:mb-4 md:flex-row md:space-x-2 xl:w-full  ">
              <Image
                aria-hidden="true"
                src="/img1.png"
                alt="Calling icon Star dryer vent"
                width="200"
                height="200"
                className="duration-300  ease-in group-hover:-translate-y-4"
              />
              <Link
                id="cta-id"
                href={`tel:${ContactInfo.tel}`}
                className="grid w-full place-items-center"
              >
                <div
                  id="cta-id"
                  className="  m-h-64 w-[90%]  transform rounded-lg bg-white  p-2 text-center text-2xl font-semibold ring ring-main transition  duration-300 ease-in hover:shadow-xl hover:shadow-minor group-hover:translate-y-4  "
                  dangerouslySetInnerHTML={{ __html: contentData.ctaText }}
                ></div>
              </Link>
            </div>
          </div>
          {/* -----------------------------------------a Conversation End------------------------ */}
          {/* <ContactFaq/> */}
          {/* -----------------------------------------Map Start---------------------------- */}
          <div className="mt-10 w-full">
            <iframe
              src={`https://maps.google.com/maps?q=${Data.slug}+USA&t=&z=7&ie=UTF8&iwloc=&output=embed`}
              height="350"
              className="mt-10 w-full  rounded-lg border"
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          {/* -----------------------------------------Map End---------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default page;
