import './App.css';
import Rates from './views/Common/Rates/Rates';
import Services from './views/Common/Services/Services';
import Banner from './views/components/Banner/Banner';
import Footer from './views/components/Footer/Footer';
import Header from './views/components/Header/Header';

function App() {
  return (
    <div className='App'>
     <Header/>
     <Banner/>
     <Services/>
     <Rates/>
     <Footer/>

    </div>
  );
}

export default App;
