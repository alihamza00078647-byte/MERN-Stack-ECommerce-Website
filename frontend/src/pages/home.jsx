import Navbar from "../components/navbar";
import Hero from "../components/hero";
import LatestCollection from "../components/latestCollections";
import BestSeller from "../components/bestSeller";
import OurPolicy from "../components/ourPolicy";
import NewsLetterBox from "../components/NewsLetterBox";


function Home() {
    return (
        <>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsLetterBox />
        </>
    )
}


export default Home;