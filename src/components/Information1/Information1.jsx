import { useEffect, useRef, useState } from "react";
import "animate.css";

const Information1 = () => {
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
      {
        threshold: 0.3, 
      }
    );

    if (descRef.current) {
      observer.observe(descRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <hr className="text-[#bababa]  mt-10" />
      <section>
        <div
          ref={descRef}
          id="descTexts"
          className={`
            md:w-1/2 sm:w-[80%] w-[90%] mx-auto mt-12 text-justify
            ${show ? "animate__animated animate__fadeInRight" : "opacity-0"}
          `}
        >
          <h4 className="text-[#ff0000] font-bold my-4">معرفی گلستان</h4>
          <p className="mb-7 text-[16px] ">
            آنچه امروز با نام مجوعه{" "}
            <span className="text-[#ff0000]">گلستان</span> می‌شناسیم در سال 1329
            بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و
            توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال
            «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با
            تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد.
            <span className="text-[#ff0000]">گلستان</span> پس از سال‌ها تلاش
            همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها
            کالاهایی قابل اعتماد و با کیفیت تولید نماید.
          </p>
          <p className="mb-7 text-[16px]">
            هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
            تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین
            بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی{" "}
            <span className="text-[#ff0000]"> شرکت گلستان</span> است
          </p>
          <h4 className="text-[#ff0000] font-bold my-4">محصولات گلستان​</h4>
          <p className="mb-32 text-[16px]">
            <span className="text-[#ff0000]">نام تجاری گلستان</span> قدمتی به
            اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این
            نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام
            تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت
            کیفیت این نام تجاری حمایت می‌کنند.
          </p>
        </div>
      </section>
    </>
  );
};
export default Information1;



