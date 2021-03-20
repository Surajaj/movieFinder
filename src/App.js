import { useState } from 'react';
import './App.scss';
import LocationComponent from './LocationComponent';
import SearchComponent from './SearchComponent';
import SearchResultsComponent from './SearchResultsComponent';

const App = () => {
  const [searchDetails, setSearchDetails] = useState('');

  const handleSearch = (key, val) => {
    setSearchDetails((state) => ({...state, [key]: val}))
  }

  return (
    <div className="App">
        <h3>Search Movies</h3>
        <div className="search-container">
          <SearchComponent onSearchChange={val => handleSearch('text', val)} />
          <LocationComponent onLocationChange={val => handleSearch('location', val)}/>
        </div>
        <SearchResultsComponent search={searchDetails} />
    </div>
  );
}

export default App;
