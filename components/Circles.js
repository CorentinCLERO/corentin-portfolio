import Image from "next/image";

const Circles = () => {
  return <div>
    <Image
      src={'/circles.png'}
      width={260}
      height={200}
      className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10"
      alt=""
    />
  </div>;
};

export default Circles;
