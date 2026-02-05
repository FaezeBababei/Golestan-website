import banner1 from "../dist/images/banner1.png";
import banner2 from "../dist/images/banner2.png";
import banner3 from "../dist/images/banner3.png";
import banner4 from "../dist/images/banner4.png";
import { useEffect, useRef, useState } from "react";
import "animate.css";

const Banner = () => {
  const descRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (descRef.current) {
      observer.observe(descRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section>
        <div
          ref={descRef}   
          id="bannerWrapper"
          className={`md:w-2/3 sm:w-[80%] hidden mx-auto my-32 sm:flex gap-6 justify-center text-[16px] text-nowrap
          ${show ? "animate__animated animate__zoomIn" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center text-center">
            <img src={banner1} alt="" />
            <h4 className="py-3 w-full border-b border-[#bababa]">
              سرمایه انسانی
            </h4>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={banner2} alt="" />
            <h4 className="py-3 w-full border-b border-[#bababa]">
              مراکز فروش
            </h4>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={banner3} alt="" />
            <h4 className="py-3 w-full border-b border-[#bababa]">
              محصولات گلستان
            </h4>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={banner4} alt="" />
            <h4 className="py-3 w-full border-b border-[#bababa]">
              مشتریان گلستان
            </h4>
          </div>
        </div>
      </section>

      <hr className="text-[#bababa] mt-10" />
    </>
  );
};

export default Banner;
