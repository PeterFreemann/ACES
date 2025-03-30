import React, { useRef, useState } from "react";
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
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative top-[5px]">
      {/* Header */}
      <div className="mt-12 py-4 bg-black text-white font-bold font-serif text-center">
        THE UP-TO-30%-OFF EDIT
      </div>

      {/* Videos Section */}
      <div className=" gap-2">
      <a href='/womenshopping' > 
        <video
          ref={videoRef}
          src={Videoo}
          controls
          autoPlay
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-[600px] object-cover mt-[1px]"
        ></video>
        </a>

        <a href='/womenshopping'>

        <video
          src={Videooo}
          controls
          autoPlay
          loop
          className="w-full h-[600px] object-cover mt-10"
        ></video>
        </a>
      </div>

      {/* Images Section */}
      <div className="grid md:grid-cols-3 mt-10 gap-1">
        <div className="">
        <a href='/womenshopping' > 
            <img src={Women} alt="" className="h-[600px]" />
            </a>
        </div>
        <div>
        <a href='/womenshopping' > 
        <img src={Womenss} alt="" className="h-[600px]" />
        </a>
        </div>
        <div>
        <a href='/womenshopping' > 
        <img src={Womensss} alt="" className="h-[600px]" />
        </a>
        </div>

      </div>
      <div className="py-8 bg-white font-bold text-2xl font-serif ">
        DENIM FITS

      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-1  md:h-[300px] h-[600px] max-sm:mb-6">
    {[Photo, Photoo, Photooo, Photoooo, Photooooo, Photoooooo].map((imgSrc, index) => (
        <div key={index} className="h-48 w-full flex items-center justify-center">
          <a href='/womenshopping' className="h-48 w-full flex items-center justify-center">
            <img src={imgSrc} alt="" className="h-full w-full object-cover" />
            </a>
        </div>
    ))}
</div>
    </section>
  );
}
