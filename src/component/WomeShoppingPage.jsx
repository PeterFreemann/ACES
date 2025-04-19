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
  // ...add remaining items (omitted here for brevity but unchanged from your original)
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
                <h3 className="text-sm mb-2 font-serif">{product.name}</h3>
                <p className="text-gray-700 font-semibold text-sm">{product.price}</p>
                <div className="flex justify-between mt-3">
                  <button
                    className="bg-gray-800 px-3 py-1 text-xs text-white rounded hover:bg-gray-900 transition"
                    onClick={() =>
                      navigate("/product-details", { state: { product } })
                    }
                  >
                    SELLING FAST
                  </button>
                  <button
                    className="text-xs text-blue-500 underline"
                    onClick={() => handleOpen(product)}
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>

      {/* MODAL */}
      {open && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-md shadow-xl w-11/12 md:w-[500px]">
            <h2 className="text-center text-xl font-bold mb-4">Confirm Purchase</h2>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto object-cover"
              />
              <div>
                <p className="font-semibold text-lg mb-2">{selectedProduct.name}</p>
                <p className="text-gray-600 mb-2">This is a sample product description.</p>
                <p className="text-sm font-bold">{selectedProduct.price}</p>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleClose}
                className="mr-2 border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
