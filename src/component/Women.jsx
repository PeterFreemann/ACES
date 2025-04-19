import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Videoo from "../images/videoo.mp4";
import Videooo from "../images/videooo.mp4";
import Women from '../images/women.jpg';
import Womenss from '../images/womens.jpg';
import Womensss from '../images/womenss.jpg';
import Photo from '../images/photo.jpg';
import Photoo from '../images/photoo.jpg';
import Photooo from '../images/photooo.jpg';
import Photoooo from '../images/photoooo.jpg';
import Photooooo from '../images/photooooo.jpg';
import Photoooooo from '../images/photoooooo.jpg';

export default function Womens() {
  const videoRef = useRef(null);

  return (
    <section className="relative top-[5px]">
      {/* Header */}
      <div className="mt-12 py-4 bg-black text-white font-bold font-serif text-center">
        THE UP-TO-30%-OFF EDIT
      </div>

      {/* Videos Section */}
      <div className="gap-2">
        <Link to="/womenshopping">
          <video
            ref={videoRef}
            src={Videoo}
            controls
            autoPlay
            loop
            className="w-full h-[600px] object-cover mt-[1px]"
          ></video>
        </Link>

        <Link to="/womenshopping">
          <video
            src={Videooo}
            controls
            autoPlay
            loop
            className="w-full h-[600px] object-cover mt-10"
          ></video>
        </Link>
      </div>

      {/* Images Section */}
      <div className="grid md:grid-cols-3 mt-10 gap-1">
        {[Women, Womenss, Womensss].map((img, idx) => (
          <div key={idx}>
            <Link to="/womenshopping">
              <img src={img} alt={`Women ${idx}`} className="h-[600px]" />
            </Link>
          </div>
        ))}
      </div>

      <div className="py-8 bg-white font-bold text-2xl font-serif">
        DENIM FITS
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-1 md:h-[300px] h-[600px] max-sm:mb-6">
        {[Photo, Photoo, Photooo, Photoooo, Photooooo, Photoooooo].map(
          (imgSrc, index) => (
            <div key={index} className="h-48 w-full flex items-center justify-center">
              <Link to="/womenshopping" className="h-48 w-full flex items-center justify-center">
                <img src={imgSrc} alt={`Denim ${index}`} className="h-full w-full object-cover" />
              </Link>
            </div>
          )
        )}
      </div>
    </section>
  );
}
