import React from "react";
import Slider from "../components/Slider";
import Midhero from "../components/Midhero";
import Offers from "../components/Offers";
import AboutUs from "../components/Aboutus";
import Aim from "../components/Aim";
import Clients from "../components/Clients";
import Dck from "../components/Dck";
import Faqnav from "../components/Faqnav";
import Faqsection from "../components/Faqsection";
// import Hero from "../components/Hero";
import Products from "../components/Products";
import Whyus from "../components/Whyus";


const Homepage = () => {
    return (
        <div>
            <Slider />
            <Faqnav />
            <Dck />

            <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
                <Midhero />

                <Offers />

                <Products />

                <AboutUs />

                <Whyus />

                <Aim />

                <Faqsection />
            </div>
            <div className="mt-20">
                <Clients />
            </div>


        </div>
    );
};

export default Homepage;