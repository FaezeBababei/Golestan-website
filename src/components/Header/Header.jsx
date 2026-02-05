import { useState, useEffect } from "react";
import logo from "../dist/images/imgi_1_logo-fr.png";
import bg from "../dist/images/hi.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);
  return (
    <>
      <div className="md:h-2 bg-black h-1 " style={{ backgroundImage: `url(${bg})` }}></div>
      <header
      id="header"
      className="md:h-18 md:flex w-full text-gray-400 sticky top-0 z-50 items-center " style={{ backgroundImage: `url(${bg})` }}
    >
      
      {/* logo */}
      <div id="logo" className="md:w-1/4  md:h-16 w-full relative  ">
        <a
          href="#"
          className="md:absolute  lg:right-30 md:right-15 top-full md:-translate-y-1/2 w-[170px] h-[105px]"
        >
          <img src={logo} alt="" className="mx-auto  " />
        </a>
      </div>

      {/* menu */}
      <nav
        id="headerInner"
        className=" md:w-3/4  sm:w-full sm:block h-16 text-[16px] w-full block"
      >
          {/* mobile button */}
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="sm:hidden block text-white text-2xl pr-4"
>
  ☰
</button>


        <ul className="sm:flex sm:items-center h-16 md:justify-start lg:gap-x-8 sm:justify-center sm:gap-x-3 sm:text-nowrap  hidden w-auto min-w-[65%]">
          <li className="">
            <a href="#" className="peer hover:text-zinc-50">
              صفحه اصلی
            </a>
          </li>
          <li className=" relative ">
            <a href="#" className="peer   hover:text-zinc-50 px-">
              شرکت گلستان
            </a>
            <ul className="absolute right-0 top-full px-5 py-2 w-48 text-nowrap bg-[#2D2D2D] text-gray-400 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-300 text-[16px]">
              <li className="hover:text-white px-2 py-2">
                <a href="">معرفی شرکت</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">تاریخچه گلستان</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">اخبار و اطلاعیه ها</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href=""> مسئولیت‌های اجتماعی</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">سازمان فروش</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">سازمان توزیع</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">برندها</a>
              </li>
            </ul>
          </li>
          <li className="relative">
            <a href="#" className="peer hover:text-zinc-50">
              محصولات
            </a>
            <ul className="absolute right-0 top-full px-5 py-2 w-48 text-nowrap bg-[#2D2D2D] text-gray-400 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-300 text-[16px]">
              <li className="hover:text-white px-2 py-2">
                <a href="">چای</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">ناتس</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">ادویه و چاشنی</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">برنج</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">زعفران و زرشک</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">دمنوش</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">حبوبات و غلات</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href=""> عصاره و شربت گیاهی</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href=""> قند و شکر</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">هاتی نودل </a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">سایر محصولات</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href=""> گل کیس</a>
              </li>
            </ul>
          </li>
          <li className="relative">
            <a href="#" className="peer hover:text-zinc-50">
              وبلاگ
            </a>
            <ul className="absolute right-0 top-full w-32 py-1 text-nowrap bg-[#2D2D2D] text-gray-400 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-300 text-[16px]">
              <li className="hover:text-white px-2 py-2">
                <a href=""> مجله گلستان</a>
              </li>
            </ul>
          </li>
          <li className=" ">
            <a href="#" className="peer hover:text-zinc-50">
              قرعه کشی
            </a>
          </li>
          <li className=" ">
            <a href="#" className="peer hover:text-zinc-50">
              استخدام
            </a>
          </li>
          <li className=" relative">
            <a href="#" className="peer hover:text-zinc-50">
              تماس با ما
            </a>
            <ul class="absolute right-0 top-full w-38 py-1 text-nowrap bg-[#2D2D2D] text-gray-400 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-300 text-[16px]">
              <li className="hover:text-white px-2 py-2">
                <a href=""> دفتر مرکزی</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href=""> صدای مصرف کنندگان </a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href=""> ارتباط با مشترکین</a>
              </li>
            </ul>
          </li>
          <li className=" ">
            <a href="main.html" className="peer hover:text-zinc-50">
              EN
            </a>
          </li>
        </ul>
      </nav>
  

      {/* mobile menu */}
<div
  className={`sm:hidden w-full overflow-hidden transition-all duration-300 ${
    menuOpen ? "max-h-96 py-1" : "max-h-0"
            }`}
          style={{ backgroundImage: `url(${bg})` }}
>
          <ul className="text-gray-300 space-y-4 px-4 text-[14px]">
            <li><a href="">صفحه اصلی</a></li>
            <li><a href="">شرکت گلستان</a></li>
            <li><a href="">محصولات</a></li>
            <li><a href="">وبلاگ</a></li>
            <li><a href="">قرعه کشی</a></li>
            <li><a href="">استخدام</a></li>
            <li><a href="">تماس با ما</a></li>
  </ul>
</div>

    </header>
    </>
    
  );
};
export default Header;
