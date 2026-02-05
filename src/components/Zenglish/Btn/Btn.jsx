const Btn = () => {
/*
  const scrollTopBtn = document.getElementById("scrollTopBtn");

 
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollTopBtn.classList.remove("hidden");
    } else {
      scrollTopBtn.classList.add("hidden");
    }
  });

  // Scroll to top
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });*/
  return (
    <>
      <button
        id="scrollTopBtn"
        class="fixed bottom-6 right-6 z-50   w-8 h-8 bg-gray-500 text-white rounded items-center justify-center hover:bg-gray-700 transition"
      >
        ↑
      </button>
    </>
  );
};
export default Btn;
