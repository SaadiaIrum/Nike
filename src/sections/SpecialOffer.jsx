import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-grow flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-orange-600"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-gray-400 text-lg leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incridble savngs, we
          offer unparalleled value that sets ur apast.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-gray-400 text-lg leading-7">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the oftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-gray-400"
            textColor="text-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
