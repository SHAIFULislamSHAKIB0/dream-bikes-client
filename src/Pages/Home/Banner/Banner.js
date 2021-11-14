import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/bike1.png'
import banner2 from '../../../images/banner/bike2.png'
import banner3 from '../../../images/banner/bike3.png'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-white">KTM-RC-1000cc </h1>
                        <p>The KTM RC is a brand of bikes made by KTM two wheeler manufacturer in India. There are 5 RC models on offer with price starting from Rs. 1,80,403 (avg. Ex-showroom). The cheapest model under the series is KTM RC 125 with 125cc engine generating 14.5 bhp of power. Whereas the most expensive model is KTM RC 390 with 373cc engine generating 42.9 bhp of power.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-white">Suzuki GSX R1000</h1>
                        <p>The Japanese manufacturing company “Suzuki” launched its exclusive liter-class supersports bike christened as Suzuki GSX-R1000 back in year 2001, which replaced its elder sibling. It gets its power from a 999cc, four-cylinder, liquid-cooled mill.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-white">Royel Enfield 1500cc</h1>
                        <p>Royal Enfield is one of the oldest surviving motorcycle manufacturers in the world. Established in 1901, the iconic British manufacturer started off by manufacturing motorcycles, bicycles, lawnmowers, stationary engines and more popularly, weapons. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;