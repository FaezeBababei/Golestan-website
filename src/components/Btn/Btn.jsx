import { useEffect, useState } from "react";

const Btn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 w-8 h-8
      bg-gray-500/40 backdrop-blur-md
      text-white rounded-md
      flex items-center justify-center
      
      hover:bg-gray-500/60
      transition-all duration-300
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      ↑
    </button>
  );
};

export default Btn;
