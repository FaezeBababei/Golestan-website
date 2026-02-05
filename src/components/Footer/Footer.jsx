import footer1 from "../dist/images/footer1.png";
import footer2 from "../dist/images/footer2.png";
import footer3 from "../dist/images/footer3.png";
import footer4 from "../dist/images/footer4.png";
import bg from "../dist/images/hi.png";
const Footer = () => {
  return (
    <>
      <section class="h-6 bg-[#ff0000]"></section>
      <footer class="py-12" style={{ backgroundImage: `url(${bg})` }}>
        <div className="md:w-[60%] sm:w-[80%] mx-auto  sm:flex sm:gap-4 justify-center mb-7 text-gray-300">
          {/* column1 */}
          <div className="sm:w-[30%] w-full mx-auto  py-3  ">
            <img src={footer1} alt="" className="mx-auto" />
            <p className=" border-y my-2 py-1.5 text-[16px] text-center">
              چای گلستان
            </p>
            <ul className="text-[14px] leading-6 sm:text-start text-center pr-2">
              <li><a href="" className="hover:text-white">چای ممتاز هندوستان</a></li>
              <li><a href="" className="hover:text-white">چای ممتاز ارل گری</a></li>
              <li><a href="" className="hover:text-white">چای سیلان عطری</a></li>
              <li><a href="" className="hover:text-white">چای ممتاز سیلان</a></li>
              <li><a href="" className="hover:text-white">چای صبحانه گلستان</a></li>
              
            </ul>
          </div>
          {/* column2 */}
          <div className="sm:w-[30%] w-full mx-auto py-3">
            <img src={footer2} alt="" className="mx-auto" />
            <p className=" border-y my-2 py-1.5 text-[16px] text-center">
              تی ‌بگ گلستان
            </p>
            <ul className="text-[14px] leading-6 sm:text-start text-center pr-2">
              <li><a href="" className="hover:text-white">تی بگ بلک لاین</a></li>
              <li><a href="" className="hover:text-white">تی بگ ارل گری</a></li>
              <li><a href="" className="hover:text-white">دمنوش نعناع</a></li>
              <li><a href="" className="hover:text-white">دمنوش بابونه</a></li>
              <li><a href="" className="hover:text-white">دمنوش چای سبز</a></li>
            
            </ul>
          </div>
          {/* column3 */}
          <div className="sm:w-[30%] w-full mx-auto py-3">
            <img src={footer3} alt="" className="mx-auto" />
            <p className=" border-y my-2 py-1.5 text-[16px] text-center">
              ادویه گلستان
            </p>
            <ul className="text-[14px] leading-6 sm:text-start text-center pr-2">
              <li><a href="" className="hover:text-white">زعفران ممتاز خراسان</a></li>
              <li><a href="" className="hover:text-white">ادویه کاری</a></li>
              <li><a href="" className="hover:text-white">ادویه ماست و خیار</a></li>
              <li><a href="" className="hover:text-white">فلفل سیاه خالص</a></li>
              <li><a href="" className="hover:text-white">زردچوبه ممتاز</a></li>
            </ul>
          </div>
          {/* column4 */}
          <div className="sm:w-[30%] w-full mx-auto  py-3">
            <img src={footer4} alt="" className="mx-auto" />
            <p className=" border-y my-2 text-center py-1.5 text-[16px]">
              حبوبات گلستان
            </p>
            <ul className="text-[14px] leading-6 sm:text-start text-center pr-2">
              <li><a href="" className="hover:text-white">لوبیا قرمز ممتاز</a></li>
              <li><a href="" className="hover:text-white">لوبیا چیتی گلیتان</a></li>
              <li><a href="" className="hover:text-white">عدس کانادایی</a></li>
              <li><a href="" className="hover:text-white">نخود زودپز کرمانشاه</a></li>
              <li><a href="" className="hover:text-white">لوبیا سفید گلستان</a></li>
            </ul>
          </div>
        </div>
        <div className="w-[60%] mx-auto ">
          <p className=" mx-auto text-center text-[14px]">
            All Right Reserved Golestan Company 2022-2025
          </p>
          <p className="mx-auto items-center text-center text-[12px]">
            Design By: Golestan Studio
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
