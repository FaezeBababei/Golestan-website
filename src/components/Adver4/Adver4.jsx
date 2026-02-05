import hospital from "../dist/images/hospital.jpg";
const Adver4 = () => {
  return (
    <section className="relative bg-[#105153] text-white h-[600px]">
      {/* <!--   --> */}
      <div class=" flex flex-col items-center justify-center h-full text-center">
        <p class="text-base mb-2 text-[#d5ece1]">
          مسئولیت‌های اجتماعی شرکت گلستان
        </p>

        <div className="w-full  border-t border-white/30"></div>

        <p class="mt-3 text-xl w-[80%] mx-auto font-light text-[#00d8df]">
          Golestan Social Responsibility
        </p>

        <p class="text-sm mt-2 text-white/80">Mahdi Hospital</p>
      </div>

      {/* <!--  --> */}
      <div class="absolute left-1/2 -translate-x-1/2 bottom-[-130px] z-20">
        <img
          src={hospital}
          alt="Mahdi Hospital"
          class="w-[390px] max-w-[90vw] shadow-2xl"
        />
      </div>

      {/* <!--  زرد --> */}
      <div class="absolute bottom-0 left-0 w-full h-3 bg-[#e9d69f] z-10"></div>
    </section>
  );
};
export default Adver4;
