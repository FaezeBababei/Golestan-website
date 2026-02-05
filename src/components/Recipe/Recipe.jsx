const Recipe = () => {
  return (
    <section className="w-full py-24">
      <div className="w-3/4 mx-auto sm:flex  gap-6 justify-center text-[16px]">
        {/* <!-- Column 1 --> */}
        <div className="md:w-1/3 sm:w-1/2 w-3/5 mx-auto bg-white pb-5 shadow-md shadow-gray-400 sm:mb-0  mb-2 ">
          <iframe
            className="w-full h-52"
            src="https://www.aparat.com/video/video/embed/videohash/bmv7ndc/vt/frame"
            allowfullscreen
          ></iframe>

          <h5 className="my-6 px-4 text-[#ff0000] font-bold text-[18px]">
            {" "}
            سالاد نودل{" "}
          </h5>

          <p className="px-4 mb-10  leading-6 text-justify">
            نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب
            جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت
            ببرید.
          </p>
          <button className="w-[134px] h-[41px] mx-4 text-[14px] leading- text-nowrap  bg-white border border-gray-300 rounded-lg hover:bg-[#ff0000] hover:text-white transition-all duration-200 ease-in cursor-pointer">
            {" "}
            ویدیوهای بیشتر
          </button>
        </div>

        {/* <!-- Column 2 --> */}
        <div className="md:w-1/3 sm:w-1/2 w-3/5 mx-auto bg-white pb-5 shadow-md shadow-gray-400">
          <iframe
            className="w-full h-52"
            src="https://www.aparat.com/video/video/embed/videohash/u551866/vt/frame"
            allowfullscreen
          ></iframe>

          <h5 className="my-6 px-4 text-[#ff0000] font-bold text-[18px]">
            {" "}
            اینستاگرام هاتی نودل{" "}
          </h5>

          <p className="px-4 mb-10 leading-6 text-justify line-clamp-4">
            نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
            دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
            سالم و كاملی ساخته است.
          </p>

          <button className="w-[134px] h-[41px] mx-4 text-[14px] leading- text-nowrap  bg-white border border-gray-300 rounded-lg hover:bg-[#ff0000] hover:text-white transition-all duration-200 ease-in cursor-pointer">
            {" "}
            ادامه مطلب
          </button>
        </div>

        {/* <!-- Column 3 --> */}
        <div className="md:w-1/3 md:bg-white md:pb-5 md:inline-block hidden shadow-md shadow-gray-400">
          <iframe
            className="w-full h-52"
            src="https://www.aparat.com/video/video/embed/videohash/x4047ld/vt/frame"
            allowfullscreen
          ></iframe>

          <h5 className="my-6 px-4 text-[#ff0000] font-bold h-[18px]">
            {" "}
            برنج گلستان{" "}
          </h5>

          <p className="px-4 mb-10 leading-6 text-justify">
            عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با
            گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌
            لایق بهترین ها هستند.
          </p>

          <button className="w-[134px] h-[41px] mx-4 text-[14px] leading- text-nowrap  bg-white border border-gray-300 rounded-lg hover:bg-[#ff0000] hover:text-white transition-all duration-200 ease-in cursor-pointer">
            {" "}
            ادامه مطلب
          </button>
        </div>
      </div>
    </section>
  );
};
export default Recipe;
