import Rates from '../../Common/Rates/Rates';
import Services from '../../Common/Services/Services';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Services/>
            <Rates/>
            <Footer/>
        </div>
    );
};

export default Home;