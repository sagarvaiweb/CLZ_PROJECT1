import React from 'react'
import { sampleListings } from '../../data';

function HomePage() {
    return ( <>
    <ul className='cardWrap'>
        {
            sampleListings.map((listing , index)=>{       
         return (
        <li key={index}>

        <a href="" className='text-decoration-none'>
        <div className="card  card_top text-start  card-image-overlay " >
        <img src={listing.image.url} className="card-img-top"   alt="listing_image"/>
        <div className="card-body">
        <h5 className="card-title">{listing.title}</h5>
        <p className="card-text">{listing.price}/night</p>
       
        </div>
        </div>
        </a>
               </li>)

            })
        }
    </ul>
    </>);
}

export default HomePage;