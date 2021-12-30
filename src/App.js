import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MarvelCharacters from './components/MarvelCharacters';
import axios from 'axios';
import Search from './components/Search';
import Pagination from './components/Pagination';


const hash =  "1a371cc6a37c3d7daa59f87c7d060487"

function App() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)

  useEffect(() => {

  const fetch = async () => {

    setLoading(true);

    if(query === '') {

      if(localStorage.getItem('favorites') === '[]' || !localStorage.getItem('favorites')) {

        localStorage.setItem('favorites', '[]')

        const res = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e5d319f123370afcb66656135487030a&hash=${hash}`);
        console.log(res.data.data.results);
        setItems(res.data.data.results);
        setLoading(false);

      }else {

        let favorite = JSON.parse(localStorage.getItem('favorites'))
        setItems(favorite)
        setLoading(false)
      }

     

    }else {

      const res = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=e5d319f123370afcb66656135487030a&hash=${hash}`);
      console.log(res.data.data.results);
      setItems(res.data.data.results);
      setLoading(false); 


    }

   
    }

    fetch()
  }, [query]);

  // Get current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  //Changes pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
   <div className='container'>
     <Header />
     <Search search={query => setQuery(query)} />
     <MarvelCharacters items={currentPosts}  loading={loading} />
     <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/>
     </div>
  );
}

export default App;
