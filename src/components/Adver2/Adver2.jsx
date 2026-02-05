import advers from "../dist/images/hero2.jpg";

const Adver2 = () => {
  return (
    <>
      <section className="relative w-full sm:h-[70vh] h-[60vh] text-[18px] ">
        <img
          src={advers}
          alt="برنج گلستان"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* <!-- Red Product Box --> */}
        <div className="absolute bottom-0 sm:right-24 sm:p-6  px-2 bg-[#ff0000]  text-white sm:w-[291px]  w-full py-2  shadow-lg z-10">
          <h2 className=" font-bold sm:mb-2">چای گلستان</h2>
          <p className="text-sm">معرفی محصول</p>
        </div>
        {/* <!-- Bottom Yellow Line --> */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-[#e9d69f]"></div>
      </section>
      <hr className="text-[#bababa] my-10" />
    </>
  );
};
export default Adver2;
