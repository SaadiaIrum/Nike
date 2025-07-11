import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import React from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 border-2 max-w-1440 mx-auto border-red-500"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-orange-600">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-orange-600 inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-gray-400 text-lg leading-8 mt-6 mb-4 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-weight-700">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="relative flex-grow flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-[url(./assets/images/collection-background.svg)] bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 "
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[20%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
