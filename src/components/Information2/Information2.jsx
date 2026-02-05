const Information2 = () => {
  return (
    <>
      <section>
        <div
          id="descTexts"
          className="md:w-1/2 sm:w-[80%] w-[90%] mx-auto my-16 text-justify "
        >
          <h4 className="text-[#ff0000] font-bold my-4">رکن اول غذای ایرانی</h4>

          <p className="mb-7 text-[16px]">
            مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم
            و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
            كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
            وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان
            با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر
            از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
          </p>
          <button className="w-[134px] h-[41px] text-[14px] leading- text-nowrap  bg-white border border-gray-300 rounded-lg hover:bg-[#ff0000]  hover:text-white  cursor-pointer transition-all duration-200 ease-in">
            محصولات برنج
          </button>

          <button className="w-[134px] h-[41px] mx-1.5 text-[14px] leading- text-nowrap  bg-white border border-gray-300 rounded-lg hover:bg-[#ff0000]  hover:text-white  cursor-pointer transition-all duration-200 ease-in">
            {" "}
            آشپزخانه گلستان
          </button>
        </div>
      </section>
    </>
  );
};
export default Information2;
