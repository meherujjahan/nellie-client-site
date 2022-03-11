import './App.css';
import AuthProvider from './Context/AuthProvider';
import Services from './views/Common/Services/Services';
import Home from './views/components/Home/Home';

function App() {
  return (
    <div className='App'>
<AuthProvider>
<Home></Home>
      <Services></Services>
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
