import advers from "../dist/images/hero3.jpg";

const Adver3 = () => {
  return (
    <>
      <section className="relative w-full sm:h-[70vh] h-[60vh] text-[18px] ">
        <img
          src={advers}
          alt="برنج گلستان"
          class="absolute inset-0 w-full h-full object-cover"
              />
              
      {/* <!-- Overlay (خیلی کم تیره) --> */}
      <div class="absolute inset-0 bg-black/10"></div>

      {/* <!-- Red Product Box --> */}
      <div
        class="absolute bottom-0 sm:left-24 sm:p-6  px-2 bg-red-600 text-white sm:w-[291px]  w-full py-2  shadow-lg z-10"
      >
        <h2 class=" font-bold sm:mb-2 text-2xl">Pistachios </h2>
        
      </div>

      {/* <!-- Bottom Yellow Line --> */}
      <div class="absolute bottom-0 left-0 w-full h-6 bg-yellow-200"></div>
        
          </section>
          <hr class="bg-gray-400 h-0.5 my-10" />
    </>
  );
};
export default Adver3;
