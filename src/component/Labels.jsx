import label from "../images/label.jpg";
import labell from "../images/labell.jpg";
import labelll from "../images/labelll.jpg";
import labellll from "../images/labellll.jpg";

export default function Label() {
  return (
    <section>
        <h1 className="text-5xl pt-10 pb-8  font-bold text-gray-600 font-serif">The biggest labels</h1>
      <div className="  ">
        
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
  <div className="h-96 bg-green-300 bg-cover bg-center" style={{ backgroundImage: `url(${label})` }}></div>
  <div className="h-96 bg-pink-300 bg-cover bg-center" style={{ backgroundImage: `url(${labell})` }}></div>
  <div className="h-96 bg-teal-300 bg-cover bg-center" style={{ backgroundImage: `url(${labelll})` }}></div>
  <div className="h-96 bg-green-300 bg-cover bg-center" style={{ backgroundImage: `url(${labellll})` }}></div>
</div>
<button className="text-5xl py-10 font-bold text-gray-600 font-serif">Shop women's brands</button>
      </div>
    </section>
  );
}
