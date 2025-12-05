import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function EditPage() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [form , setForm] = useState({title:"", image:"",description:"",price:"",location:"",country:""})

    useEffect(()=>{
        const fetchListingData = async()=>{
            try{
            let res = await axios.get(`http://localhost:3000/listings/${id}`) ;
            // setForm(res.data);
            setForm({
                title: res.data.title ?? "",
                image: res.data.image?.url ?? "",   // ← make it a string
                description: res.data.description ?? "",
                price: res.data.price ?? "",
                location: res.data.location ?? "",
                country: res.data.country ?? ""
               });
        }
        catch(err){
            console.log(err);
        }

        }

        fetchListingData();
        
    } , [id])

    const handleInput = (e)=>{
        setForm({...form , [e.target.name]:e.target.value}) ;
    }
    const handleSubmit = async(e)=>{
        e.preventDefault(); // prevent  page refresh
        let res = await axios.put(`http://localhost:3000/listings/${id}/update`, form) ;
        navigate(`/listings/${id}`) ;
       
    }
    
    return ( 
    <form className="container col-5" onSubmit={handleSubmit}>
            <h2 className='mt-5'>Update Your Listing</h2>
            <div className="input_div">
                <label htmlFor="title">Title</label>
                <input className='new_listing_input' type="text" id='title' name='title' placeholder='Give your cachy title' value={form.title}  onChange={handleInput} required />
            </div>
             <div className="input_div">
                <label htmlFor="image">Image</label>
                <input className='new_listing_input'  type="text" id='image' name='image' placeholder='Select the image' value={form.image}  onChange={handleInput} required />
            </div>
             <div className="input_div">
                <label htmlFor="description">Description</label>
                <textarea className='new_listing_input'  type="text" id='description' name='description' placeholder='Provide some description' value={form.description}  onChange={handleInput} required />
            </div>
             <div className="input_div">
                <label htmlFor="price">Price</label>
                <input className='new_listing_input'  type="number" id='price' name='price' placeholder='Enter a price' value={form.price}  onChange={handleInput} required />
            </div>
             <div className="input_div">
                <label htmlFor="location">Location</label>
                <input className='new_listing_input'  type="text" id='location' name='location' placeholder='Enter location' value={form.location}  onChange={handleInput} required />
            </div>
             <div className="input_div">
                <label htmlFor="country">Country</label>
                <input className='new_listing_input'  type="text" id='country' name='country' placeholder='Enter country' value={form.country}  onChange={handleInput} required />
            </div>
            <button type='submit' className='update_btn mt-4 mb-5'>Update Listing</button>
        </form>
        );

    }
export default EditPage;