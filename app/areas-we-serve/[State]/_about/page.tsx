import Image from "next/image";
import Link from "next/link";
import React from "react";
import { headers } from "next/headers";
import { BiMailSend, BiSolidPhone, BiSolidTime } from "react-icons/bi";
import { BsBookmarkStarFill, BsFillPatchCheckFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa6";
import Banner from "@/app/components/Home/Banner";
import contentData from "@/components/Content/about.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import content from "@/components/Content/subDomainUrlContent.json";
import NavbarState from "@/app/components/State/NavbarState";
import contactInfo from "@/components/Content/ContactInfo.json";
interface AboutProps {
  subdomain: string;
}

export function generateMetadata({ params }: { params: { services: string } }) {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  // const serviceData: any = NewContent.find(
  //   (content) => content.StateID === subdomainKey?.toUpperCase(),
  // );

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return {
    title: {
      absolute: contentData.h1Banner,
    },
    description: `Simcoe Fences is your trusted fencing provider in ${Data.name}, offering durable, stylish, and affordable fencing solutions for all your needs.`,
    alternates: {
      canonical: `https://${Data.slug}.${ContactInfo.host}/about`,
    },
  };
}

const Page = async () => {
  // Fetch subdomain or any other server-side data here
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  // const serviceData: any = NewContent.find(
  //   (content) => content.StateID === subdomainKey?.toUpperCase(),
  // );

  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return (
    <div className="">
      <NavbarState />
      <div className="max-[1200px] flex flex-col items-center justify-center bg-white text-black">
        <div className="w-screen min-w-[375px] cursor-default text-lg md:w-full">
          {/* poster */}
          <Banner
            h1={contentData.h1Banner}
            image={contentData.bannerImage}
            header={contentData.bannerQuote}
            p1={`Simcoe Fences is your trusted fencing provider in ${Data.name}, offering durable, stylish, and affordable fencing solutions for all your needs.`}
          />
          {/* poster */}
          {/* -----------------------------------------About Start------------------------ */}
          <div className="mx-4 mt-6 print:hidden md:mx-10">
            {/* who */}
            <div className="my-20 grid w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="text-">About </div>
                <div className="text-3xl font-bold">
                  Who We Are?
                  <br />
                </div>
                <div className="mt-6"></div>
                <div className="text-justify">
                  At Simpson Salute HVAC, we understand the frustration of
                  dealing with HVAC issues in {Data.name}. Our team of experts
                  is dedicated to providing top-notch HVAC services that keep
                  your home comfortable all year round. <br />
                  With our quick response times and efficient solutions, we
                  ensure that your HVAC system is up and running in no time. We
                  offer a range of services, including HVAC installation,
                  repair, and maintenance, all carried out with precision and
                  care.
                  <br />
                  Our top priority is customer satisfaction, and we take pride
                  in providing reliable and affordable HVAC services to the
                  residents of {Data.name}. Trust Simpson Salute HVAC for all
                  your HVAC needs, and experience the difference a professional
                  team can make.
                </div>
              </div>
              <div className="w-full pt-10">
                <Image
                  src={`/${contentData.h2Image}`}
                  className="rounded-lg border object-cover shadow-lg"
                  alt={contentData.h2Image.split(".")[0]}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            {/* who */}
          </div>
          {/* -----------------------------------------About End------------------------ */}
          {/* Mission */}
          <div className="relative mx-4 mt-6 flex h-full flex-col gap-8 md:mx-10 md:flex-row  md:px-32">
            <div className="grid  w-full grid-cols-1 gap-8 rounded-lg p-4 md:grid-cols-3 ">
              <div className="rounded-lg border-[3px]  border-main duration-300 ease-in-out  hover:bg-main hover:text-white ">
                <h2 className="p-2 text-center text-2xl font-bold">
                  Our Mission
                </h2>
                <div className=" p-4 text-center">
                  Our mission is to deliver superior HVAC services in{" "}
                  {Data.name} that prioritize comfort, energy efficiency, and
                  customer satisfaction. We aim to exceed expectations by
                  providing reliable, innovative solutions that keep homes and
                  businesses comfortable year-round. Our focus is on building
                  trust through consistent quality and a proactive approach to
                  every challenge.
                </div>
              </div>

              <div className="rounded-lg border-[3px]  border-main bg-main  text-white duration-300 ease-in-out  hover:bg-transparent hover:text-black ">
                <h2 className="p-2 text-center text-2xl font-bold">
                  Our Ethics
                </h2>
                <div className=" p-4 text-center">
                  Integrity is the cornerstone of our business. We uphold the
                  highest ethical standards in everything we do, from
                  transparent pricing to honest assessments of your HVAC needs
                  in {Data.name}. We value accountability, respect, and open
                  communication, ensuring that our clients feel confident and
                  informed throughout every project.
                </div>
              </div>

              <div className="rounded-lg border-[3px] border-main duration-300 ease-in-out  hover:bg-main hover:text-white ">
                <h2 className="p-2 text-center text-2xl font-bold">
                  Our Promise
                </h2>
                <div className=" p-4 text-center">
                  We promise to treat every home and business as our own. From
                  punctual service to meticulous attention to detail, we go
                  above and beyond to ensure your satisfaction. With Simpson
                  Salute, you can expect a seamless experience backed by our
                  unwavering commitment to quality, reliability & long-lasting
                  results in {Data.name}.
                </div>
              </div>
            </div>
          </div>
          {/* Mission */}
          {/* -----------------------------------------Conversation ------------------------ */}
          <div className="my-20">
            <div className="text-center text-4xl font-extrabold text-main">
              Let&apos;s Start a Conversation
            </div>
            <div className="mt-4 border-double text-center">
              <button
                id="cta-id"
                className="mt-3 rounded-lg bg-main px-4 py-3 font-bold tracking-wide text-white shadow-lg hover:bg-minor"
              >
                <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
                  {ContactInfo.No}
                </a>
              </button>
            </div>
          </div>
          {/* -----------------------------------------Conversation End------------------------ */}
          {/* all */}
          <div className="mx-4 my-20 md:mx-20">
            <div className="text-3xl font-bold">
              <div className="flex justify-center gap-2">
                <FaCrown className="text-3xl text-main" />
                Areas We Serve
              </div>
            </div>
            <div
              className="mt-2 text-center text-xl"
              dangerouslySetInnerHTML={{
                __html: contentData.areaweserveSection.description,
              }}
            ></div>
            <div className="flex justify-center">
              <Link
                href={`${ContactInfo?.baseUrl}locations`}
                className="text-center text-xl font-bold text-main duration-150 ease-in hover:tracking-wide"
              >
                {contentData.areaweserveSection.linkText}
              </Link>
            </div>
          </div>
          {/* all */}
        </div>
      </div>
    </div>
  );
};

export default Page;
