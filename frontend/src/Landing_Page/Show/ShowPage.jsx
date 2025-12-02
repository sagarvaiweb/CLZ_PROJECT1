import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ShowPage() {

    const {id} = useParams();
    cosnt [listing , setListing] = useState(null);

    useEffect(()=>{
        const fetchListing = async()=>{
            const res = await axios.get(`http://localhost:3000/listings/${id}`) ;
            setListing(res.data);
        }

        fetchListing();
    }, [id])
    
    return (<div class="card card_show">
    <h5 class="card-title">{listing.title}</h5>
    <img src={listing.image.url} class="card-img-top" alt="show_image"/>
    <div class="card-body">
     <p class="card-text">{listing.description}</p>
     <p class="card-text">{listing.price}</p>
     <p class="card-text">{listing.location}</p>
     <p class="card-text">{listing.country}</p>
    
    </div>
</div>);
}

export default ShowPage;