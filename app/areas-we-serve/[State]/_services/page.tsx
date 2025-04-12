import React from 'react'
import Banner from '@/app/components/Home/Banner'
import contentData from '@/components/Content/servicePage.json'
import Service from '@/app/components/Home/Service'
import { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import NavbarState from '@/app/components/State/NavbarState'
import { headers } from 'next/headers'
import ContactInfo from "@/components/Content/ContactInfo.json";
import Servicedata from "@/components/Content/serviceWidgetContent.json";
import Image from "next/image";
import content from "@/components/Content/subDomainUrlContent.json";

export function generateMetadata({ params }: { params: { services: string } }) {
  const serviceData: any = Servicedata.lists.find(
    (service) => service.slug === params.services,
  );
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") 
  const Data: any = content[subdomain as keyof typeof content];
  return {
    title: {
      absolute: contentData.h1Banner,
    },
    description: `Simcoe Fences offers reliable fencing solutions in ${Data?.name } for residential & commercial projects. Quality craftsmanship, affordable rates!`,
    alternates: {
      canonical: `https://${Data.slug}.${ContactInfo.host}/services`,
    },
  };
}
const page = () => {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain")
  const contentDat: { name: string } = content[subdomain as keyof typeof content];
  const abbrevation = subdomain?.split("-")[1]?.toUpperCase(); 
const StateName = contentDat?.name ? (abbrevation ? `${contentDat.name}, ${abbrevation}` : contentDat.name) : "Aurora, CO";
  return (
    <div className="">
    <NavbarState/>
    <div>
     <Banner  h1={contentData.h1Banner}
          image={contentData.bannerImage}
          header={contentData.bannerQuote}
          p1={`Simcoe Fences offers reliable fencing solutions in ${StateName} for residential & commercial projects. Quality craftsmanship, affordable rates!`}    />
          {/* Content 1 */}
          <div className="">
            <div className="mt-20 text-minor text-4xl text-center">{contentData?.serviceTitle}</div>
            <Service value={subdomain}/>
          </div>
          {/* Content 1 */}
    </div>
    </div>
  )
}

export default page


// export function generateStaticParams() {
//   const cityData: any = Servicedata.lists;
//   return cityData.map((locations: any) => ({
//     State: locations.slug.toString(),
//   }));
// }