import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { useRef } from "react";

const cards = [
    {
      id: 1,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 2,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 3,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 4,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 5,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 6,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 7,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 8,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 9,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 10,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 11,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
    {
      id: 12,
      name: "ACES DESIGN striped t-shirt with sports graphic in black",
      price: "$3000",
      image: "/images/womenimage.jpg",
    },
]

export default function ProductDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product; // Get product from navigation state

  const [quantity, setQuantity] = useState(1);
  const [selectedProduct] = useState(product || null);
  const [updatedPrice, setUpdatedPrice] = useState(product?.price || "");

  const scrollContainerRef = useRef(null);

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);

      if (selectedProduct) {
        const originalPrice = parseInt(
          selectedProduct.price.replace("₦", "").replace(",", "")
        );
        const newPrice = originalPrice * value; // Multiply by the selected quantity
        setUpdatedPrice(`₦${newPrice.toLocaleString()}`);
      }
    }
  };

  if (!product) {
    return <p className="text-center text-xl mt-10">No product found.</p>;
  }

  return (
    <section className="relative top-[32px] mb-[200px]">
      <div className="mt-12 py-4 bg-black text-white font-bold font-serif text-center">
        THE UP-TO-30%-OFF EDIT
      </div>
      
      <div className="flex items-center justify-center">
        <div className="md:w-[75%] bg-white p-6 mt-4">
          <div className="grid md:grid-cols-2 md:gap-12 gap-5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto text-left font-serif"
            />
            <div>
              <p className="text-lg text-left font-serif mb-3">{product.name}</p>
              <p className="text-gray-600 text-left font-serif mb-3">{updatedPrice}</p>
              <p className="text-gray-600 text-left font-serif mb-3">
                Color: <b className="text-bold">Black</b>
              </p>
              <input
                className=" flex items-center  justify-start h-12 px-4 border border-gray-300 rounded-md"
                type="number"e
                name="quantity"
                placeholder="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <button
                    className="btn bg-gray-700 px-12 py-3 text-md text-white font-semibold flex items-center font-serif  justify-start mt-4"
                    
                  >
                    ADD TO BAG
                  </button>


            </div>
            
          </div>
          <div>
                <h1 className="text-left mt-12 text-[16px] font-bold font-serif">
                YOU MIGHT ALSO LIKE

                </h1>
                <div className="grid grid-cols-3 md:gap-2 gap-3  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-6 w-full">
                {cards.length > 0 ? (
          cards.map((product) => (
            <div key={product.id} className="card product-card-alt gap-2">
              <div className="product-thumb h-[150px]  md:h-[220px] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover font-serif"
                />
              </div>
              <div className="card-body">
                <h3 className="product-title text-sm  mb-2 mt-3 text-left font-serif text-[10px]">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-left font-semibold md:text-sm text-xs ">{product.price}</p>
                <div className="flex justify-between mt-2 mb-4">
                  <button
                    className="btn bg-gray-700 px-2 py-1 text-xs text-white font-semibold font-serif"
                    onClick={() =>
                        navigate("", { state: { product } })
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
                

            </div>
            

        </div>
        
      </div>
      <div className="flex items-center justify-center bg-gray-200 py-[30px]  max-sm:p-4">
        

      
      <div className=" md:w-[70%] max-sm:bg-white max-sm:p-4 max-sm:shadow-md">
      <div className="text-left">
            <h1 className="font-bold text-[18px] font-serif ">BUY THE LOOK</h1>
            <p className="mb-4 font-serif">Shop the model's full 'fit</p>
        </div>
            <div className="grid grid-cols-2 md:gap-12 md:gap-5 gap-2  ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto text-left font-serif"
            />
            <div>
              <p className="text-lg text-left font-serif mb-3">{product.name}</p>
              <p className="text-gray-600 text-left font-serif mb-3">{updatedPrice}</p>
              <p className="text-gray-600 text-left font-serif mb-3">
                Color: <b className="text-bold">Black</b>
              </p>
              


            </div>
            
          </div>
            </div>
            </div>
            <div className="">
            
            <div className="flex items-center justify-center bg-white pt-[20px]  ">
                
            <div className="relative w-full flex flex-col items-center md:px-5">
      {/* Heading */}
      <h1 className="text-left w-full max-w-[80%] text-[16px] font-bold font-serif px-11 mb-7 mt-2 ">
        PEOPLE ALSO BOUGHT
      </h1>

      {/* Scrollable Product List with Navigation Buttons */}
      <div className="relative w-full max-w-[73%] flex items-center max-sm:px-3">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
          aria-label="Previous slide"
        >
          ❮
        </button>

        {/* Scrollable Products */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-2 scrollbar-hide scroll-smooth w-full "
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {cards.length > 0 ? (
          cards.map((product) => (
            <div key={product.id} className="card product-card-alt gap-2">
              <div className="product-thumb h-[150px]  md:h-[220px] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover font-serif"
                />
              </div>
              <div className="card-body">
                <h3 className="product-title text-sm  mb-2 mt-3 text-left font-serif text-[10px] ">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-left font-semibold md:text-sm text-xs ">{product.price}</p>
                <div className="flex justify-between mt-2 mb-4">
                  <button
                    className="btn bg-gray-700 px-2 py-1 text-xs text-white font-semibold font-serif"
                    onClick={() =>
                        navigate("", { state: { product } })
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

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>
    </div>

    
    
                </div>
            </div>
    </section>
  );
}
