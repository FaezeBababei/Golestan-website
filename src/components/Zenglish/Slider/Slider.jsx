import banner from "../../dist/images/ENtea.png"
const Slider = () => {
    return (
         <section
      class="block bg-[linear-gradient(to_top,rgb(220,220,220),rgb(242,242,242))] w-full pb-14"
    >
      <div class="lg:w-[70%] md:w-[80%] w-[90%] mx-auto sm:flex  items-center  pt-15">
        {/* <!-- متن --> */}
        <div class="sm:w-1/2 w-full">
          <h2 class="text-xl font-bold text-[#ff0000] mb-2">
           Golestan Tea
          </h2>
          
          <p id="descText" class="w-[90%] text-justify leading-6 text-[16px] text-gray-500 mb-15  ">
           Sourced from the best tea estates on the banks of Brahmaputra River in Assam and Darjeeling, India, Golestan teas possess the smell and taste of traditional Indian teas.   </p>
          <button
            class="w-[134px] h-[41px] text-[14px] leading- text-nowrap  bg-white border border-gray-300 rounded-lg hover:bg-[#d71a21] hover:text-white transition-all duration-200 ease-in"
          >
           <a href="" className="mx-auto"> Read more</a>
          </button>
        </div>

        {/* <!-- عکس --> */}
        <div id="descImageWrapper" class="sm:w-1/2 w-full h-80 pr-8 ">
          <img
            src={banner}
            alt="چای گلستان"
            class="w-[350px]  mx-auto "
          />
        </div>
      </div>
    </section>
    )
};
export default Slider