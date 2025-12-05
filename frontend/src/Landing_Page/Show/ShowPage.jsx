import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


function ShowPage() {

    const {id} = useParams();
    const [listing , setListing] = useState({ });

    useEffect(()=>{
        const fetchListing = async()=>{
            try{
                
                let res = await axios.get(`http://localhost:3000/listings/${id}`) ;
                setListing(res.data);
                console.log("listing is fetched successfully" , res.data);
            }
            catch(err){
                console.log("listing is not fetched:", err);
            }
            
          
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
                <Link to={`/listings/${listing._id}/edit`} className='update_btn'>Update</Link>
                <Link className='delete_btn'>Delete</Link>
            </div>
        </div>
    );
}

export default ShowPage;