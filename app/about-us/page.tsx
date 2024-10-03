"use client"

import ContactForm from "../components/ui/contact-us"
import Footer from "../components/ui/footer"
import Navbar from "../components/ui/Navbar"
import AboutHero from "./about-hero"
import AboutUs from "./about-us-main"

export default function Home (){
    return(
        <div>
<Navbar/>
<AboutHero/>
<AboutUs/>
<ContactForm/>
<Footer/>

        </div>

    )
}