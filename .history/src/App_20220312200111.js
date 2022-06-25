
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Services from './views/Common/Services/Services';
import Home from './views/components/Home';

function App() {
  return (
    <div className='App'>
{/* <AuthProvider>
<Header></Header>
<Banner></Banner>
      <Services></Services>
      <Rates></Rates>
      <Footer></Footer>
</AuthProvider> */}
     
      <AuthProvider>
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
      </AuthProvider>
    

    </div>
  );
}

export default App;
