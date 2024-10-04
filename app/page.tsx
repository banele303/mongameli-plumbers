
import HomeHero from "./components/ui/home-hero";
import Navbar from "./components/ui/Navbar";
import SecondSection from "./components/ui/second-section";
import ContactCTA from "./components/ui/contact-cta";
import AllServices from "./components/ui/all-services";
import Testimonials from "./components/ui/testimonial-section";
import ContactForm from "./components/ui/contact-us";
import Footer from "./components/ui/footer";
import AboutUs from "./about-us/about-us-main";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

      <Navbar/>
      <HomeHero/>
      <SecondSection/>
      <ContactCTA/>
      <AboutUs/>
      <AllServices/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
