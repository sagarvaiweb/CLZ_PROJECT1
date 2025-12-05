import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ShowPage() {

    const {id} = useParams();
    const [listing , setListing] = useState({ });

    useEffect(()=>{
        const fetchListing = async()=>{
            let res = await axios.get(`http://localhost:3000/listings/${id}`) ;
            
            setListing(res.data);
        }

        fetchListing();

    }, [id])
    
    return (
        <div className="container col-5">
            <h2 className='mt-5'>{listing.title}</h2>

            <div className="image_div mt-4">
            <img className='show_image' src={listing?.image?.url} alt="show_image" />    
            </div>

            <div className='text-body mt-4'>
                  <p>{listing.description}</p>
                  <p>&#8377;{listing.price}</p>
                  <p>{listing.location}</p>
                  <p>{listing.country}</p>
            </div>

            <div className="btn_div mb-5 mt-5">
                <button className='update_btn'>Update</button>
                <button className='delete_btn'>Delete</button>
            </div>
        </div>
    );
}

export default ShowPage;