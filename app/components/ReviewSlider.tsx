"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  content: string;
}

interface ReviewSliderProps {
  data: Review[];
}
const ReviewSlider: React.FC<ReviewSliderProps> = ({data}:any) => {
// console.log(data)

  const testimonials = [
    {
      "id": 1,
      "name": "Michael Peterson",
      "content":
        "When we decided to replace our old wooden fence, we didn’t know where to start. Simcoe Fences guided us through every step, from selecting the perfect design to the final installation. Now our backyard looks amazing."
    },
    {
      "id": 2,
      "name": "Samantha Russo",
      "content":
        "After a storm damaged our fence, we needed immediate help to secure our property. Simcoe Fences responded quickly and sent a team out the same day. They repaired the fence beautifully and even reinforced areas to prevent future issues. Their prompt and efficient service gave us peace of mind."
    },
    {
      "id": 3,
      "name": "David Linwood",
      "content":
        "We wanted a fence that would enhance our home’s curb appeal while providing privacy. Simcoe Fences delivered a stunning, custom vinyl fence that’s both durable and stylish. Their attention to detail and use of high-quality materials stood out. We've received so many compliments from neighbors!"
    },
    {
      "id": 4,
      "name": "Jessica Marquez",
      "content":
        "I had a specific idea for a decorative fence that would complement my garden. Simcoe Fences took my vision and brought it to life. They even suggested improvements I hadn’t thought of, and the result was beyond what I imagined. It’s truly a showpiece in my yard!"
    },
    {
      "id": 5,
      "name": "Robert Fletcher",
      "content":
        "As a landlord, I need reliable contractors who provide great value. Simcoe Fences replaced the fencing around one of my rental properties quickly and at a fair price. The tenants were thrilled with the upgrade, and I’m confident it will last for years."
    },
    {
      "id": 6,
      "name": "Emily Sanders",
      "content":
        "We were hesitant about hiring a fencing company after a bad experience elsewhere. Simcoe Fences changed our perspective completely. They communicated clearly, showed up on time, and cleaned up thoroughly after the job was done. It’s rare to find such dependable professionals!"
    },
    {
      "id": 7,
      "name": "Christopher Nolan",
      "content":
        "Our top priority was securing our yard for our dogs. Simcoe Fences designed and installed a fence that not only keeps our pets safe but also complements our landscape. Their team even adjusted the gate height to accommodate our smallest pup. Truly a pet-friendly company!"
    },
    {
      "id": 8,
      "name": "Alexandra Bennett",
      "content":
        "It's been five years since Simcoe Fences installed our aluminum fence, and it still looks as good as new. Their craftsmanship and material quality are unmatched. We recently called them back for a small addition, and they delivered the same excellent service."
    }
  ]
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow:true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="pb-10  relative">
      <h2 className="text-first text-3xl font-bold text-center text-main mt-20 mb-10">Testimonials</h2>
    <Slider {...settings} >
      {
        testimonials.map((item:any ,index:number) => (
          
          <div className="p-5 lg:h-80 mb-10  lg:bg-main lg:text-white relative" key={index+1}>
            <div className="flex justify-center items-center"><Image src="/5Star.png" alt="review" width={1000} height={500} className="w-40 "/></div>
            
            <h3 className="text-xl font-semibold mt-4  text-center">{item.name}</h3>
            <p className="mt-4 ">{item.content}</p>
          </div>
        ))
      }
      
    </Slider>
    </div>
  );
}

export default ReviewSlider;

