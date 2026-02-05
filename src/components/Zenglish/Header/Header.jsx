import logo from "../../dist/images/engolestan-logo.png";
import bg from "../dist/images/hi.png";


const Header = () => {
/*  
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("mobileOverlay");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});

function closeMenuFunc() {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

closeMenu.addEventListener("click", closeMenuFunc);
overlay.addEventListener("click", closeMenuFunc);*/ 
  return (
    <header
      id="header"
      className="md:h-18 md:flex w-full text-gray-400 sticky top-0 z-50 " style={{ backgroundImage: `url(${bg})` }}
    >
      {/* logo */}
      <div id="logo" className="md:w-1/4  md:h-18 w-full relative  ">
        <a href="#" className="md:absolute  lg:left-30 md:left-15 top-full md:-translate-y-1/2 w-[170px] h-[105px]">
          <img src={logo} alt="" className="mx-auto  " />
        </a>
      </div>
      
      {/* menu */}
      <nav id="headerInner" className=" md:w-3/4  sm:w-full sm:block h-20 pt-8 text-[16px] w-full block">
        <button
        id="menuBtn"
        class="sm:hidden block text-white text-2xl pl-4"
      >
        ☰
      </button>
        
        <ul className="sm:flex text-[18px] md:justify-center lg:gap-x-5 sm:justify-center sm:gap-x-3 sm:text-nowrap  hidden capitalize ">
          
          <li className="">
            <a href="#" className="peer hover:text-zinc-50">
               home
            </a>
          </li>
          <li className=" relative ">
            <a href="#" className="peer   hover:text-zinc-50 px-">
               About us
            </a>
            <ul className="absolute right-0 top-full px-5 py-2 w-42 text-nowrap bg-[#2D2D2D] text-gray-400 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-300 text-[16px]">
              <li class="hover:text-white px-2 py-2">
                <a href=""> about golestan</a>
              </li>
              <li class="hover:text-white px-2 py-2">
                <a href="">our history </a>
              </li>
              <li class="hover:text-white px-2 py-2">
                <a href="">golestan CSR   </a>
              </li>
              <li class="hover:text-white px-2 py-2">
                <a href="">  Sales</a>
              </li>
              <li class="hover:text-white px-2 py-2">
                <a href=""> distribution</a>
              </li>
              <li class="hover:text-white px-2 py-2">
                <a href=""> careers</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="#" className="peer hover:text-zinc-50">
               brands
            </a>
          </li>


          <li className="relative">
            <a href="#" className="peer hover:text-zinc-50">
              procuts
            </a>
            <ul
              className="absolute right-0 top-full px-5 py-2 w-48 text-nowrap bg-[#2D2D2D] text-gray-400 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-300 text-[16px]"
            >
              <li className="hover:text-white px-2 py-2"><a href="">tea</a></li>
              <li className="hover:text-white px-2 py-2"><a href="">pistachios</a></li>
              <li className="hover:text-white px-2 py-2">
                <a href=""> spices </a>
              </li>
              <li className="hover:text-white px-2 py-2"><a href="">rice</a></li>
              <li className="hover:text-white px-2 py-2">
                <a href=""> saffron </a>
              </li>
              <li className="hover:text-white px-2 py-2"><a href="">herbal teas</a></li>
              <li className="hover:text-white px-2 py-2">
                <a href="">  grains</a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">  herbal water & syrup  </a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href="">  others </a>
              </li>
              <li className="hover:text-white px-2 py-2">
                <a href=""> hotiKara prodects </a>
              </li>
             
            </ul>

          </li>
           <li className="">
            <a href="#" className="peer hover:text-zinc-50">
               brands
            </a>
          </li>

          <li className=" ">
            <a href="index.html" className="peer hover:text-zinc-50">
              FA
            </a>
          </li>
        </ul>
      </nav>
      {/* mobile */}
      <div id="mobileMenu" className="w-full hidden">
        <ul>
          <li>jhbbm</li>
          <li>jhbbm</li>
          <li>jhbbm</li>
          <li>jhbbm</li>
          <li>jhbbm</li>
        </ul>

      </div>

    </header>
  );
};
export default Header;