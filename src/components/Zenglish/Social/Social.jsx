const Social = () => {
    return (
        <>
        <section class="bg-[#f1f1f1] py-6">
      <div class="flex justify-center items-center gap-3 text-white">
        {/* <!-- GL --> */}
        <a
          href="#"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#d6d6d6] font-bold text-lg transition-all duration-300 hover:bg-[#89C864] hover:scale-110"
        >
          GL
        </a>


        {/* <!-- Telegram --> */}
        <a
          href="#"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#d6d6d6] transition-all duration-300 hover:bg-[#2DA6DB] hover:scale-110"
        >
          <span class="fab fa-telegram"></span>
        </a>

        {/* <!-- Instagram --> */}
        <a
          href="https://instagram.com/golestanco"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#d6d6d6] transition-all duration-300 hover:bg-[#BE2D2D] hover:scale-110"
        >
          <i class="fab fa-instagram"></i>
        </a>

        {/* <!-- LinkedIn --> */}
        <a
          href="#"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#d6d6d6] transition-all duration-300 hover:bg-[#4CA7D5] hover:scale-110"
        >
          <i class="fab fa-linkedin"></i>
        </a>

        {/* <!-- Facebook --> */}
        <a
          href="#"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#d6d6d6] transition-all duration-300 hover:bg-[#7C95C9] hover:scale-110"
        >
          <i class="fab fa-facebook"></i>
        </a>
      </div>
    </section>
        </>
        
    )
}
export default Social