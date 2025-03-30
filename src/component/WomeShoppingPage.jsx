import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="relative top-[32px] mb-[70px]">
        <div className="mt-12 py-4 bg-black text-white font-bold font-serif text-center">
        THE UP-TO-30%-OFF EDIT
      </div>
      <div className=" py-4 bg-white text-black font-bold font-serif text-center">
        T-SHIRT Fit
      </div>
      <div className="grid grid-cols-1 gap-2 px-12 sm:grid-cols-2 ">

      </div>
      <div className="grid grid-cols-1 gap-2 px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {cards.length > 0 ? (
          cards.map((product) => (
            <div key={product.id} className="card product-card-alt gap-2">
              <div className="product-thumb  h-[386px] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover font-serif"
                />
              </div>
              <div className="card-body">
                <h3 className="product-title text-sm  mb-2 mt-3 text-left font-serif">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-left font-semibold text-sm ">{product.price}</p>
                <div className="flex justify-between mt-2 mb-4">
                  <button
                    className="btn bg-gray-700 px-2 py-1 text-xs text-white font-semibold font-serif"
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
          <p>No products found.</p>
        )}
      </div>

      {/* MODAL */}
      {open && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-center text-xl font-bold">
              Confirm Purchase
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto"
              />
              <div>
                <p className="text-lg font-semibold">{selectedProduct.name}</p>
                <p className="text-gray-600">Product Description</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="btn btn-outline-secondary mr-2 px-4 py-2"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button className="btn btn-primary px-4 py-2">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
