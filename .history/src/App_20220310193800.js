import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Services from './views/Common/Services/Services';
import Footer from './views/components/Footer/Footer';
import Header from './views/components/Header/Header';
import Home from './views/components/Home/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Switch>
      <Header/>
      <Route path='/home'>
        <Home/>
      </Route>
        <Route path="/Services">
        <Services/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
   
    

    </div>
  );
}

export default App;
