import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios  from 'axios';


function HomePage() {
  const [allListings , setAllListings] = useState([]);

 useEffect(()=>{
    const fetchListings = async()=>{
        try{
        let res = await axios.get("http://localhost:3000/listings");
        setAllListings(res.data);
        }
        catch(err){
            console.error("listings is not fetched from database:", err);
        }
        
    }

    fetchListings();
 })
    
    

    return ( <>
    <ul className='cardWrap'>
        {
            allListings.map((listing , index)=>{       
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