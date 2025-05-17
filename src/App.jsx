import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";
import Subscribe from "./sections/Subscribe";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="sm:pl-16 pl-8 sm:pr-16 pr-8 sm:pb-24 pb-12">
      <Hero />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <PopularProducts />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SuperQuality />
    </section>
    <section className="sm:px-16 px-8 py-10">
      <Services />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SpecialOffer />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12 bg-blue-50">
      <CustomerReviews />
    </section>
    <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12 bg-black sm:pt-24 pt-12 text-white">
      <Footer />
    </section>
  </main>
);

export default App;
