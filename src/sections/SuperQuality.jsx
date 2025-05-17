import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-conatainer"
    >
      <div className="flex flex-grow flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-orange-600"> Super </span>
          <span className="text-orange-600"> Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-gray-400 text-lg leading-7">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-gray-400 text-lg leading-7">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      {/* Right section */}
      <div className="flex-grow flex justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
