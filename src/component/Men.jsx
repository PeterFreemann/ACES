import React from 'react';
import { Link } from 'react-router-dom';

import Mens from '../images/mens.jpg';
import Menss from '../images/menss.jpg';
import Manadvert from '../images/manadvert.jpg';
import Manadverts from '../images/manadverts.jpg';
import Manadvertss from '../images/manadvertss.jpg';
import Denimmen from '../images/denimmen.jpg';
import Denimmens from '../images/denimmens.jpg';
import Denimmenss from '../images/denimmenss.jpg';
import Denimmensss from '../images/denimmensss.jpg';
import Denimmenssss from '../images/denimmenssss.jpg';
import Denimmensssss from '../images/denimmensssss.jpg';

export default function Men() {
  return (
    <section className="relative top-[32px]">
      {/* Header */}
      <div className="mt-12 py-4 bg-black text-white font-bold font-serif text-center">
        THE UP-TO-30%-OFF EDIT
      </div>

      <div className="relative w-full h-[600px]">
        <Link to="/menshopping">
          <img src={Menss} alt="" className="w-full h-[600px] object-cover mt-[1px]" />
        </Link>
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          New Season Jersey
        </h1>
      </div>

      <div>
        <Link to="/menshopping">
          <img src={Mens} alt="" className="w-full h-[600px] object-cover mt-[1px]" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-1 mt-10">
        {[
          { img: Manadvert, text: 'New Season Jersey' },
          { img: Manadverts, text: 'New Jersey' },
          { img: Manadvertss, text: 'New Season' },
        ].map((item, index) => (
          <div key={index} className="relative w-full h-[400px]">
            <Link to="/menshopping">
              <img src={item.img} alt="" className="w-full h-full object-cover" />
            </Link>
            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
              {item.text}
            </h1>
          </div>
        ))}
      </div>

      <div className="py-8 bg-white font-bold text-2xl font-serif">
        DENIM FITS
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-1 md:h-[300px] h-[600px] max-sm:mb-6">
        {[Denimmen, Denimmens, Denimmenss, Denimmensss, Denimmenssss, Denimmensssss].map(
          (imgSrc, index) => (
            <div key={index} className="h-48 w-full flex items-center justify-center">
              <Link to="/menshopping" className="h-48 w-full flex items-center justify-center">
                <img src={imgSrc} alt="" className="h-full w-full object-cover" />
              </Link>
            </div>
          )
        )}
      </div>
    </section>
  );
}
