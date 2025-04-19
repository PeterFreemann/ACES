import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/lady.jpg",
  },
  {
    id: 2,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$4000",
    image: "/images/ladyy.jpg",
  },
  {
    id: 3,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$5000",
    image: "/images/ladyyyyy.jpg",
  },
  {
    id: 4,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$6000",
    image: "/images/ladyyyyyy.jpg",
  },
  {
    id: 5,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$7000",
    image: "/images/ladyyyyyy.jpg",
  },
  {
    id: 6,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$8000",
    image: "/images/ladyyyyyyy.jpg",
  },
  {
    id: 7,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$9000",
    image: "/images/ladyyyyyyyy.jpg",
  },
  {
    id: 8,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$10000",
    image: "/images/ladyyyyyyyyy.jpg",
  },
  {
    id: 9,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$11000",
    image: "/images/ladyyyyyyyyyy.jpg",
  },
  {
    id: 10,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "12000",
    image: "/images/ladyyyyyyyyyyy.jpg",
  },
  {
    id: 11,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$13000",
    image: "/images/ladyyyyyyyyyyyyy.jpg",
  },
  {
    id: 12,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$14000",
    image: "/images/ladyyyyyyyyyyyyyyy.jpg",
  },
  {
    id: 13,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$15000",
    image: "/images/ladyyyyyyyyyyyyyyyyy.jpg",
  },
  {
    id: 14,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/ladyyyyyyyyyyyyyyyyy.jpg",
  },
  {
    id: 15,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 16,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 17,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 18,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 19,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 20,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 21,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 22,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 23,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 24,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 25,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 26,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 27,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 28,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 29,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 30,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 31,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 32,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 33,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 34,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 35,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
  {
    id: 36,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$3000",
    image: "/images/womenimage.jpg",
  },
];

export default function WomenShoppingPage() {
  const navigate = useNavigate();

  return (
    <section className="relative top-[32px] mb-[70px]">
      <div className="mt-12 py-4 bg-black text-white font-bold font-serif text-center">
        THE UP-TO-30%-OFF EDIT
      </div>
      <div className="py-4 bg-white text-black font-bold font-serif text-center">
        Fits
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