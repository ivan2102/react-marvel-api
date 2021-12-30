import React from 'react';
import Loader from  '../components/Loader';
import MarvelItem from './MarvelItem';

const MarvelCharacters = ({items, loading}) => {
    return  loading ? <Loader /> : 
    
    <section className='contents'>

        {
        
        items.map((item, index) => (

          <MarvelItem key={index} item={item}>{item}</MarvelItem>
         ) )
         
         }
       </section>

    
    
}

export default MarvelCharacters;
