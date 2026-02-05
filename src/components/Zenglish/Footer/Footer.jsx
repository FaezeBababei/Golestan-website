import footer1 from "../../dist/images/footer1.png";
import footer2 from "../../dist/images/footer2.png";
import footer3 from "../../dist/images/footer3.png";
import footer4 from "../../dist/images/footer4.png";
import bg from "../dist/images/hi.png";
const Footer = () => {
  return (
    <>
      <section className="h-6 bg-[#ff0000]"></section>
      <footer className="py-12" style={{ backgroundImage: `url(${bg})` }}>
        <div className="md:w-[60%] sm:w-[80%] mx-auto  sm:flex sm:gap-4 justify-center mb-7 text-gray-300 capitalize">
          <div className="sm:w-[30%] w-full mx-auto  py-3 ">
            <img src={footer4} alt="" className="mx-auto" />
            <p className=" border-y my-2 py-1.5 text-[16px] text-center">
              golestan beans
            </p>
            <ul className="text-[14px] leading-6 sm:text-start text-center pl-2">
              <li>
                <a href="" className="hover:text-white">
                  Golestan Peas{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  navy beans
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  pinto beans{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  lentil
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  kidney beans
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-[30%] w-full mx-auto  py-3 ">
            <img src={footer3} alt="" className="mx-auto" />
            <p className=" border-y my-2 py-1.5 text-[16px] text-center">
              golestan spices
            </p>
            <ul className="text-[14px] leading-6 sm:text-start text-center pl-2">
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  saffron{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  turmeric
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  black pepper{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  garlic powder
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  curry seasoning
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-[30%] w-full mx-auto  py-3 ">
            <img src={footer2} alt="" className="mx-auto" />
            <p className=" border-y my-2 py-1.5 text-[16px] text-center">
              golestan tea bag
            </p>
            <ul className="text-[14px] leading-6 sm:text-start text-center pl-2">
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  black line tea bag{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  earl gray tea bag
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  mint herbal tea{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  chamomile tea{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  borage herbal tea{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-[30%] w-full mx-auto  py-3 ">
            <img src={footer1} alt="" className="mx-auto" />
            <p className=" border-y my-2 py-1.5 text-[16px] text-center">
              golestan tea
            </p>
            <ul className="text-[14px] leading-6 sm:text-start text-center pl-2">
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  premuim indian tea{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  earl gray tea{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  breakfast tea{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  black line{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white">
                  {" "}
                  ceylon tea{" "}
                </a>
              </li>
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
