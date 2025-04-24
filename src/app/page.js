"use client";
import Image from "next/image";
import Navbar from "./navbar/page"; 
import Homepage from "./homepage/page";
import Homea from "./homea/page";
import BusinessHero from "./homeb/page";
import ServicesSection from "./ServicesSection/page";
import CaseStudiesSection from "./CaseStudiesSection/page";
import CompanyStatsSection from "./CompanyStatsSection/page";
import Ratting from "./Ratting/page";
import Pricing from "./Pricing/page";
import WorkWithUs from "./WorkWithUs/page";
import Blog from "./Blog/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Homea />
      <BusinessHero />
      <ServicesSection />
      <CaseStudiesSection />
      <CompanyStatsSection />
      <Ratting />
      <Pricing />
      <WorkWithUs />
      <Blog />
      <Footer />
    </>
  );
}
