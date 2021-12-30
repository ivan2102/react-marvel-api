import React, {useState} from 'react';

const Search = ({search}) => {

    const [text, setText] = useState('');

    const onSearch = (query) => {

        setText(query)
        search(query)
    }
    return (
        <section className='search'>
          <form>
              <input 
              type="text" 
              className='form-control'
              placeholder='Find your favorite character...'
              autoFocus
              onChange={event => onSearch(event.target.value)}
              value={text}
               />
        </form>  
        </section>
    )
}

export default Search;
