import EventCard from "@/components/Cards/EventCard";
import Footer from "@/components/Footer/Footer";
import EventSection from "@/components/HomePage/EventSection";
import HeroSection from "@/components/HomePage/HeroSection";
import InterestsDialog from "@/components/HomePage/InterestsDialog";
import LocationSearch from "@/components/HomePage/LocationSearch";
import ScrollCategories from "@/components/HomePage/ScrollCategories";
import TrendingCategories from "@/components/HomePage/TrendingCategories";

// import Head from "next/head";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex-col">
        <HeroSection />

        <LocationSearch />
        <TrendingCategories />
        <ScrollCategories />
        <EventSection />
        <InterestsDialog />
        <Footer />
      </div>
    </>
  );
}
