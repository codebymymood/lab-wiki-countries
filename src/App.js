
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
     <Navbar />   
      <div className="container">
       <div className="row">
        <div className="col-sm">
         <CountriesList />
        </div>
        <div className="col-sm">
            <Routes>
              <Route path="countries/:cca3" element={ <CountryDetails /> } />
            </Routes>
        </div>   
      </div>
    </div>
  </div>
  );
}

export default App;
