import axios from 'axios';
import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function NewListingPage() {
    const [form , setForm] = useState({title:"", image:"" , description:"", price:"", location:"", country:""})
    const handleInput = (e)=>{
        setForm({...form , [e.target.name]:e.target.value}) ;
    }

    let navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault() ; // prevent page refresh

        try{

            let res = await axios.post("http://localhost:3000/listings/create" , form) ;
            console.log( res.message);
            navigate("/");
        }
        catch(err){
            console.log("listing is not created:", err);
        }
    }
    return ( 
        <form className="container col-5" onSubmit={handleSubmit}>
            <h2 className='mt-5'>Create New Listing</h2>
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
            <button type='submit' className='update_btn mt-4 mb-5'>Create Listing</button>
        </form>
    );
}

export default NewListingPage;