import React, { useState } from 'react';
import { redirect, Route, Switch, useNavigate } from 'react-router-dom';
import SearchPage from './components/Search/SearchPage';

function App(props) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState({});
  const setSearch = async(term) => {
    setSearchTerm(term);
    await setData(term);
    navigate('/search')
  }
  const setData = async (term) => {
    const searches = await 
  }

  return(
<SearchPage/>
  )
}

export default App;
