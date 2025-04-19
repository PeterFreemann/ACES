import label from "../images/male.jpg";
import labell from "../images/malee.jpg";
import labelll from "../images/maleee.jpg";
import labellll from "../images/maleeee.jpg";

export default function Shops() {
  return (
    <section className="">
        
      <div className="  ">
        
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
  <div className="h-96 bg-green-300 bg-cover bg-center" style={{ backgroundImage: `url(${label})` }}></div>
  <div className="h-96 bg-pink-300 bg-cover bg-center" style={{ backgroundImage: `url(${labell})` }}></div>
  <div className="h-96 bg-teal-300 bg-cover bg-center" style={{ backgroundImage: `url(${labelll})` }}></div>
  <div className="h-96 bg-green-300 bg-cover bg-center" style={{ backgroundImage: `url(${labellll})` }}></div>
  
  
  
</div>
<button className="text-5xl py-10 font-bold text-gray-600 font-serif px-5">Shop men's brands</button>

      </div>
    </section>
  );
}
