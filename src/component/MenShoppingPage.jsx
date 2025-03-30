import { useState } from "react";
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
    image: "/images/images.jpg",
  },
  {
    id: 11,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagess.jpg",
  },
  {
    id: 12,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesss.jpg",
  },
  {
    id: 13,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagessss.jpg",
  },
  {
    id: 14,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesssss.jpg",
  },
  {
    id: 15,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagessssss.jpg",
  },
  {
    id: 16,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesssssss.jpg",
  },
  {
    id: 17,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagessssssss.jpg",
  },
  {
    id: 18,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesssssssss.jpg",
  },
  {
    id: 19,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagessssssssss.jpg",
  },
  {
    id: 20,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesssssssssss.jpg",
  },
  {
    id: 21,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagessssssssssss.jpg",
  },
  {
    id: 22,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesssssssssssss.jpg",
  },
  {
    id: 23,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagessssssssssssss.jpg",
  },
  {
    id: 24,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesssssssssssssss.jpg",
  },
  {
    id: 25,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagessssssssssssssss.jpg",
  },
  {
    id: 26,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesssssssssssssssss.jpg",
  },
  {
    id: 27,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagessssssssssssssssss.jpg",
  },
  {
    id: 28,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagessssssssssssssssss.jpg",
  },
  {
    id: 29,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesssssssssssssssssss.jpg",
  },
  {
    id: 30,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesaaaaaaaa.jpg",
  },
  {
    id: 31,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesaaaaaaa.jpg",
  },
  {
    id: 32,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesaaaaaa.jpg",
  },
  {
    id: 33,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesaaaaa.jpg",
  },
  {
    id: 34,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesa.jpg",
  },
  {
    id: 35,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesaa.jpg",
  },
  {
    id: 36,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    price: "$2000",
    image: "/images/imagesaaa.jpg",
  },
];

export default function MenShoppingPage() {
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
    <section className="relative top-[32px] mb-[40px]">
        <div className="mt-12 py-4 bg-black text-white font-bold font-serif text-center">
        THE UP-TO-30%-OFF EDIT
      </div>
      <div className=" py-6 bg-white text-black font-bold font-serif text-center text-2xl">
        New season T-Shirt fit
      </div>
      <div className="grid grid-cols-1 gap-2 px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.length > 0 ? (
          cards.map((product) => (
            <div key={product.id} className="card product-card-alt gap-2">
              <div className="product-thumb  h-[386px] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-body">
                <h3 className="product-title text-sm  mb-2 mt-3 text-left">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-left font-semibold text-sm">{product.price}</p>
                <div className="flex justify-between mt-2 mb-4">
                  <button
                    className="btn bg-gray-700 px-2 py-1 text-xs text-white font-semibold"
                    onClick={() =>
                        navigate("/menproduct-details", { state: { product } })
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
