import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagee.jpg",
  },
  {
    id: 2,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imageeee.jpg",
  },
  {
    id: 3,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imageee.jpg",
  },
  {
    id: 4,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imageeeee.jpg",
  },
  {
    id: 5,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imageeeeee.jpg",
  },
  {
    id: 6,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imageeeeeee.jpg",
  },
  {
    id: 7,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imageeeeeeee.jpg",
  },
  {
    id: 8,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imageeeeeeeee.jpg",
  },
  {
    id: 9,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imageeeeeeeeee.jpg",
  },
  {
    id: 10,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imageeeeeeeeeee.jpg",
  },
];

export default function MenShoppingPage() {
  const navigate = useNavigate();

  return (
    <section className="relative top-[32px] mb-[70px]">
      <div className="mt-12 py-4 bg-black text-white font-bold font-serif text-center">
        THE MEN'S DROP
      </div>
      <div className="py-4 bg-white text-black font-bold font-serif text-center">
        Men’s Fits
      </div>

      <div className="grid grid-cols-2 gap-2 px-4 sm:px-12 md:grid-cols-3 lg:grid-cols-4">
        {cards.length > 0 ? (
          cards.map((product) => (
            <div key={product.id} className="border shadow rounded-md overflow-hidden">
              <div className="h-[200px] md:h-[386px] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm mb-2 font-serif text-left">{product.name}</h3>
                <p className="text-gray-700 font-semibold text-sm text-left">{product.price}</p>
                <div className="flex justify-between mt-3">
                  <button
                    className="btn bg-gray-700 px-2 py-1 text-xs text-white font-semibold"
                    onClick={() =>
                      navigate("/product-details", { state: { product } })
                    }
                  >
                    SELLING FAST
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
    </section>
  );
}
