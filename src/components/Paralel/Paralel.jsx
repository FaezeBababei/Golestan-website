import paralels from "../dist/images/food.png";

const Paralel = () => {
  return (
    <section
      className="h-[300px] w-full bg-center bg-no-repeat
                 bg-cover bg-scroll
                 lg:bg-contain lg:bg-fixed"
      style={{ backgroundImage: `url(${paralels})` }}
    ></section>
  );
};

export default Paralel;
