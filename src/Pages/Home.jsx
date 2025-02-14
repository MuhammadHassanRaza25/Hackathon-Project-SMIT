import FAQsSections from "../components/FAQsSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LoanCalculator from "../components/LoanCalculator";

function Home(){

    return(
        <>
             <Header/>
            
             <HeroSection/>
             
             <LoanCalculator/>

             <FAQsSections/>

             <Footer/>
        </>
    )
}

export default Home;