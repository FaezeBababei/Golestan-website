import mag1 from "../dist/images/mag1.jpg";
import mag2 from "../dist/images/mag2.jpg";
import mag3 from "../dist/images/mag3.jpg";

const Magazine = () => {
  return (
    <>
      <div className="md:w-1/2 sm:w-3/4 w-[90%] mx-auto text-[#ff0000] my-8 font-bold">
        مجله گلستان
      </div>
      <section className="w-[100%] bg-[#cde4b0] sm:py-24 py-11 text-[16px]">
        <div className="w-3/4 mx-auto sm:flex gap-3 justify-center">
          <div className="md:w-1/3 sm:w-1/2 w-3/5 mx-auto bg-white pb-5 shadow-md shadow-gray-400">
            <div className="relative w-full">
              <img src={mag1} alt="" className="w-full" />
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </div>

            <h1 className="my-6 px-4 text-[#ff0000] text-[18px] cursor-pointer">
              ماکارونی با سبزیجات
            </h1>
            <p className="pr-4 pl-3 mb-10 text-justify">
           ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
            </p>

            <button className="w-[134px] h-[41px] mx-4 text-[14px] leading- text-nowrap bg-white border border-gray-300 rounded-lg hover:bg-[#ff0000] hover:text-white transition-all duration-200 ease-in cursor-pointer">
              ادامه مطلب
            </button>
          </div>

          <div className="md:w-1/3 sm:w-1/2 w-3/5 mx-auto bg-white pb-5 shadow-md shadow-gray-400">
            <div className="relative w-full">
              <img src={mag2} alt="" className="w-full" />
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <h1 className="my-6 px-4 text-[#ff0000] text-[18px] cursor-pointer">
              {" "}
              سوپ مکزیکی
            </h1>
            <p className="pr-4 pl-3 mb-10 text-justify">
              گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
              آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
              بیرون آورده…
            </p>

            <button className="w-[134px] h-[41px] mx-4 text-[14px] leading- text-nowrap  bg-white border border-gray-300 rounded-lg hover:bg-[#ff0000] hover:text-white transition-all duration-200 ease-in cursor-pointer">
              {" "}
              ادامه مطلب
            </button>
          </div>
          <div className="md:w-1/3 md:bg-white md:pb-5 md:inline-block hidden shadow-md shadow-gray-400">
            <div className="relative w-full">
              <img src={mag3} alt="" className="w-full" />
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <h1 className="my-6 px-4 text-[#ff0000] text-[18px] cursor-pointer">
              {" "}
              چیلا‌کیله{" "}
            </h1>
            <p className="pr-4 pl-3 mb-10 text-justify">
              احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
              فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
              فهرستنوش جان کنید جزئی
            </p>

            <button className="w-[134px] h-[41px] mx-4 text-[14px] leading- text-nowrap  bg-white border border-gray-300 rounded-lg hover:bg-[#ff0000] hover:text-white transition-all duration-200 ease-in cursor-pointer">
              {" "}
              ادامه مطلب
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Magazine;
