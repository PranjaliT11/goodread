import Categorylist from "../../Components/Categorylist/Index";
import Header from "../../Components/Header/Index";
import Navbar from "../../Components/Navbar/Index";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="container">
                <Categorylist />
            </div>
        </>

    );
}
export default HomePage;