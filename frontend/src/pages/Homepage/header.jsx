import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Header() {
    return (
      <Carousel className="carousel carousel-slide" dynamicHeight={false}>
                <div>
                    <img src="img/mel1.png"  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="img/mel2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="img/mel3.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="img/mel4.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="img/mel6.png" />
                    <p className="legend">Legend 3</p>
                </div>
      </Carousel>
    ); 
}
