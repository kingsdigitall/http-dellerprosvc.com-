"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import data from "@/components/Content/serviceWidgetContent.json";

const ServiceSlider = () => {
  const testimonials = data;

  const settings = {
    className: "center",
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="relative px-4  py-5">
      {data.lists.map((item: any) => (
        <div className=" rounded-2xl border p-3 shadow-xl" key={item?.title}>
          <div className="flex items-center justify-start gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-full object-cover">
              <Image
                aria-hidden="true"
                src={`/${item.imageUrl}`}
                alt={`${item.imageUrl.split(".")}`}
                title={`${item.imageUrl.split(".")}`}
                width="900"
                height="550"
                className="h-14 w-14 object-cover "
              />
            </div>
            <h2 className="w-[75%]  text-lg font-bold text-main">
              {item.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSlider;
