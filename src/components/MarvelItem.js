import React from 'react';

const MarvelItem = ({item}) => {


    const favorite = (item) => {

        var lastData = JSON.parse(localStorage.getItem('favorites'))
        lastData.push(item)
        localStorage.setItem('favorites', JSON.stringify(lastData))
    }

    return (
        <div className='content'>
           <div className='content-inner'>
               <div className='content-front'>
                   <img src={item.thumbnail.path + "/portrait_small.jpg"} alt=''/>
               </div>

               <div className="content-back">
                   <h1>{item.name}</h1>
                   <ul>
                       <li>
                           <strong>Name: </strong> {item.name}
                       </li>

                      <li>
                          <button type='button' className='btn' onClick={() => favorite(item)}>Favorite</button>
                      </li>
                   </ul>
               </div>
           </div>
        </div>
    )
}

export default MarvelItem;
