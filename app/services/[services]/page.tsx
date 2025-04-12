import Banner from "@/app/components/Home/Banner";
import React from "react";
import Servicedata from "@/components/Content/serviceWidgetContent.json";
import Image from "next/image";
import Service from "@/app/components/Home/Service";
import { headers } from "next/headers";
import content from "@/components/Content/subDomainUrlContent.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import CtaSimple from "@/app/components/CtaSimple";

export function generateMetadata({ params }: { params: { services: string } }) {
  const serviceData: any = Servicedata.lists.find(
    (service) => service.slug === params.services,
  );
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
  return {
    title: serviceData.title
      .split("[location]")
      .join(Data?.name || ContactInfo.location),
    description: serviceData.description
      .split("[location]")
      .join(Data?.name || ContactInfo.location),
    alternates: {
      canonical: `https://${ContactInfo.host}/services/${params.services}/`,
    },
  };
}

const page = ({ params }: { params: { services: string } }) => {
  const serviceData: any = Servicedata.lists.find(
    (service) => service.slug === params.services,
  );
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
  const locationName = Data?.name || ContactInfo.location;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `${ContactInfo.name}`,
      "image": {
        "@type": "ImageObject",
        "url": `${ContactInfo.logo}` || "",
      },
      "telephone": `${ContactInfo.No}`,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        streetAddress: ContactInfo.address.split(",")[0].trim(),
        addressLocality: ContactInfo.location.split(",")[0].trim(),
        addressRegion: ContactInfo.location.split(",")[1].trim(),
        postalCode: ContactInfo.zipCode.trim(),
      addressCountry: "United States",
      },
      "url": `${ContactInfo.baseUrl}`,
      "areaServed": {
        "@type": "City",
        "name": ContactInfo.location.split(",")[0].trim(),
        "address": {
          "@type": "PostalAddress",
          "addressLocality": ContactInfo.location.split(",")[0].trim(),
          "addressRegion": ContactInfo.location.split(",")[1].trim(),
          "addressCountry": "United States"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.3,
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": 44
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${serviceData.title.split("in [location]").join(" ")}`,
      "description": `${serviceData.description.split("[location]").join(locationName)}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": `${ContactInfo.name}`,
        "image": {
          "@type": "ImageObject",
          "url": `${ContactInfo.logo}` || ""
        },
        "telephone": `${ContactInfo.No}`,
        "address": {
          "@type": "PostalAddress",
          streetAddress: ContactInfo.address.split(",")[0].trim(),
        addressLocality: ContactInfo.location.split(",")[0].trim(),
        addressRegion: ContactInfo.location.split(",")[1].trim(),
        postalCode: ContactInfo.zipCode.trim(),
        addressCountry: "United States",
        }
      },
      "areaServed": {
        "@type": "City",
        "name": ContactInfo.location.split(",")[0].trim(),
        "address": {
          "@type": "PostalAddress",
          "addressLocality": ContactInfo.location.split(",")[0].trim(),
          "addressRegion": ContactInfo.location.split(",")[1].trim(),
          "addressCountry": "United States"
        }
      },
      "serviceType": serviceData.title.split("in [location]").join(" "),
      "url": `${ContactInfo.baseUrl}services/${params.services}`,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceData.title.split("in [location]").join(" ")} Catalog`,
      }
    }
  ]
  return (
    <div className="">
       <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <Banner
        h1={serviceData.title.split("[location]").join(locationName)}
        image={"banner.jpg"}
        header=""
        p1={serviceData.description.split("[location]").join(locationName)}
      />
      <div className="mx-4 mt-6 print:hidden md:mx-10">
        {/* who */}
        <div className="my-20 grid w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-bold">
              <h2> {serviceData.h2.split("[location]").join(locationName)}</h2>
              <br />
            </div>
            <div
              className="text-justify "
              dangerouslySetInnerHTML={{
                __html: serviceData.p2.split("[location]").join(locationName),
              }}
            ></div>
          </div>
          <div className="w-full pt-10">
            <Image
              src={`${serviceData.imageUrl}`}
              className="h-[30rem] rounded-lg border object-cover shadow-lg"
              alt={serviceData.imageUrl.split("/").pop()?.split(".")[0] || "image"}
              width={1000}
              height={1000}
            />
          </div>
        </div>
        {/* who */}
      </div>
      {/* <div className="mx-auto my-4 w-80 border p-4">
          <div dangerouslySetInnerHTML={{ __html: serviceData.description }} />
        </div> */}
      {serviceData.h3 && (
        <div className="my-20 bg-main text-white">
          <div className="text- mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className=" text-center text-3xl font-bold">
              {serviceData.h3.split("[location]").join(locationName)}
            </h2>
            <div
              className="mt-4 flex flex-wrap justify-center gap-4"
              // dangerouslySetInnerHTML={{
              //   __html: serviceData.p3
              //     .split("[location]")
              //     .join(locationName),
              // }}
            >
              {serviceData.p3.split("|").map((Item: string) => (
                <p key={Item} className="m-2  rounded-md border  p-4 font-bold">
                  {Item}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <Service value={subdomain} />
      <div className="my-20">
        <CtaSimple />
      </div>
      {serviceData.seoContent && (
        <div className="bg-gray-100 text-black ">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8">
            <div
              className="mt-4 "
              dangerouslySetInnerHTML={{
                __html: serviceData.seoContent
                  .split("[location]")
                  .join(locationName),
              }}
            ></div>
          </div>
        </div>
      )}
      {/* <TypeOfDumpster /> */}
    </div>
  );
};

export default page;

export function generateStaticParams() {
  const cityData: any = Servicedata.lists;
  return cityData.map((locations: any) => ({
    services: locations.slug.toString(),
  }));
}
