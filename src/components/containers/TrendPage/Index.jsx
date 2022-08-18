import Footer from "../../../UI/Footer";
import Header from "../../../UI/Header";
import SearchBar from "../SearchBar/Index";
import Trend from "../Trend/Index";

function Trendpage() {
    return (
        <>
            <Header />
                <main>
                    <SearchBar />
                    <Trend />
                </main>
            <Footer />
        </>
    )
}

export default Trendpage;