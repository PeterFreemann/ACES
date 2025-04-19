import React from 'react';
import Carousel from '../component/Carousel';
import Hero from '../component/Hero';
import Advert from '../component/Advert';
import Label from '../component/Labels';
import Shops from '../component/Shops';


const Home = () => {
    return (
        <div>
            <Carousel/>
                  <Hero/>
                  <Advert/>
                  <Label/>
                  <Shops/>
                  
                  
        </div>
    );
};

export default Home;