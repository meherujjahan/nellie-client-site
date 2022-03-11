import './App.css';
import AuthProvider from './Context/AuthProvider';
import Rates from './views/Common/Rates/Rates';
import Services from './views/Common/Services/Services';
import Banner from './views/components/Banner/Banner';
import Footer from './views/components/Footer/Footer';
import Header from './views/components/Header/Header';

function App() {
  return (
    <div className='App'>
<AuthProvider>
<Header></Header>
<Banner></Banner>
      <Services></Services>
      <Rates></Rates>
      <Footer></Footer>
</AuthProvider>
     
      {/* <AuthProvider>
      <BrowserRouter>
      <Switch>
      
      <Route path='/home'>
        <Home/>
      </Route>
        <Route path="/Services">
        <Services/>
        </Route>
      </Switch>
     
      </BrowserRouter>
      </AuthProvider> */}
    

    </div>
  );
}

export default App;
