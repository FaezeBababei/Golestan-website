import banner from "../dist/images/tea-pic1.png";
const Slider = () => {
  return (
    <section className="block bg-[linear-gradient(to_top,rgb(220,220,220),rgb(242,242,242))] w-full pb-14">
      <div className="lg:w-[70%] md:w-[80%] w-[90%] mx-auto sm:flex items-center
    pt-15">
        {/* <!-- متن --> */}
        <div className="sm:w-1/2 w-full ">
          <h2 className="text-xl font-bold text-[#ff0000] mb-2">
            قرعه‌کشی مصرف‌کنندگان گلستان
          </h2>
          <p className="mb-7 text-gray-700 text-sm">
            قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان
          </p>
          <p
            id="descText"
            className="w-[90%] text-justify leading-6 text-[16px] text-gray-500 mb-15 sm:pl-6 pl-0 animate__animated animate__fadeInDown "
          >
            هر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با
            ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای
            گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
            است.
          </p>
          <button className="w-[134px] h-[41px] text-[14px] leading- text-nowrap  bg-white border border-gray-300 rounded-lg hover:bg-[#d71a21] hover:text-white transition-all duration-200 ease-in">
            <a href="" className="mx-auto">
              اطلاعات بیشتر
            </a>
          </button>
        </div>

        {/* <!-- عکس --> */}
        <div id="descImageWrapper" className="sm:w-1/2 w-full sm:pr-8 pr-0 items-center">
          <img
            src={banner}
            alt="چای گلستان"
            class="mx-auto animate__animated animate__fadeInDown" 
          />
        </div>
      </div>
    </section>
  );
};
export default Slider;
