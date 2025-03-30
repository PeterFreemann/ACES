import image from "../images/image.jpg";
import images from "../images/imagee.jpg";

export default function Hero() {
  return (
    <section className="relative top-[32px]">
      <div className="mt-12 py-4 bg-black text-white font-bold font-serif text-center ">
        THE UP-TO-30%-OFF EDIT
      </div>
    <div className="grid grid-cols-2 md:h-screen overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none max-sm:top-[150px]">
          <h1 className="md:text-[145px] text-[40px] font-bold text-black font-serif ">
            ACES
          </h1>
        </div>   
  <div className="relative">
    <img src={images} alt="men" className="w-full md:h-full object-cover" />
    <a href="/womens">
    <button className="btn  max-sm:btn-sm lg:btn-lg absolute top-1/2 md:mt-[100px] lg:mt-[30px] right-2 transform -translate-y-1/2 font-bold bg-black md:px-8 md:py-3 md:py-2 px-4 py-2 hover:bg-white hover:text-black text-white max-sm:mt-[100px] font-serif max-sm:text-[12px]">
      SHOP WOMENS
    </button>
    </a>
  </div>
  <div className="relative md:h-full">
    <img src={image} alt="women" className="w-full md:h-full object-cover" />
    <a href="/mens">
    <button className="btn  max-sm:btn-sm lg:btn-lg absolute top-1/2 md:mt-[100px] lg:mt-[30px] left-2 transform -translate-y-1/2 font-bold bg-black md:px-8 md:py-2 md:py-3 px-4 py-2 hover:bg-white hover:text-black text-white max-sm:mt-[100px] font-serif max-sm:text-[12px] ">
      SHOP MENS
    </button>
    </a>
  </div>
  
</div>
</section>
  );
}
