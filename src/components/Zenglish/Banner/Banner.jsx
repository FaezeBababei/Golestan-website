import banner1 from "../dist/images/banner1.png"
import banner2 from "../dist/images/banner2.png"
import banner3 from "../dist/images/banner3.png"
import banner4 from "../dist/images/banner4.png"
const Banner = () => {
    return (
        <>
        <section>
      <div
        id="bannerWrapper"
        class="md:w-2/3 sm:w-[80%] hidden mx-auto my-32 sm:flex gap-6 justify-center text-[16px] text-nowrap "
      >
        <div class="flex flex-col items-center text-center">
          <img src={banner1} alt="" />
          <h4 class="py-5 w-full border-b-2">Employees </h4>
        </div>

        <div class="flex flex-col items-center text-center">
          <img src={banner2} alt="" />
          <h4 class="py-5 w-full border-b-2">Retailers </h4>
        </div>

        <div class="flex flex-col items-center text-center">
          <img src={banner3} alt="" />
          <h4 class="py-5 w-full border-b-2">Products </h4>
        </div>

        <div class="flex flex-col items-center text-center">
          <img src={banner4} alt="" />
          <h4 class="py-5 w-full border-b-2">Consumers </h4>
        </div>
      </div>
    </section>
    <hr class="bg-gray-400 h-0.5 my-10" />
        </>
    )
}
export default Banner