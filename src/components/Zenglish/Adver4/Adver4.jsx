import hospital from "../dist/images/hospital.jpg"
const Adver4 = () => {
    return (
        <section class="relative bg-[#105153] text-white h-[600px]" dir="rtl">
      {/* <!-- محتوای متنی --> */}
      <div class="flex flex-col items-center justify-center h-full text-center">
        <p class="my-6 text-xl w-[80%] mx-auto font-light text-teal-300"> Golestan Social Responsibility</p>

        <div class="w-[600px] max-w-[90%] border-t border-white/30"></div>


      </div>

      {/* <!-- تصویر --> */}
      <div class="absolute left-1/2 -translate-x-1/2 bottom-[-130px] z-20">
        <img
          src={hospital}
          alt="Mahdi Hospital"
          class="w-[390px] max-w-[90vw] shadow-2xl"
        />
      </div>

      {/* <!-- نوار زرد --> */}
      <div class="absolute bottom-0 left-0 w-full h-3 bg-[#e9c46a] z-10"></div>
    </section>
        
    )
}
export default Adver4