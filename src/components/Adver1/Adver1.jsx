import adverr from "../dist/images/imgi_7_image2-new-1.jpg";

const Adver1 = () => {
  return (
    <>
      <section className="relative w-full sm:h-[70vh] h-[60vh] text-[18px] ">
        <img
          src={adverr}
          alt="برنج گلستان"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* <!-- Red Box --> */}
        <div className="absolute bottom-0  sm:right-24 bg-[#ff0000] text-white sm:w-[300px] w-full sm:p-6 p-2 shadow-lg z-10">
          <h2 className=" font-bold sm:mb-2">برنج گلستان</h2>
          <p className="text-sm">معرفی محصول</p>
        </div>

        {/* <!--Yellow Line --> */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-[#e9d69f]"></div>
      </section>
      <hr className="text-[#bababa] my-10" />
    </>
  );
};
export default Adver1;
