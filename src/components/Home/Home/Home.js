import {
  Banner,
  FeaturedServices,
  About,
  Services,
  Cta,
  Contact,
} from "../index";

const Home = () => {
  return (
    <>
      <Banner />
      <main id="main">
        <FeaturedServices />
        <About />

        <Services />

        <Cta />

        <Contact />
      </main>
    </>
  );
};

export default Home;
