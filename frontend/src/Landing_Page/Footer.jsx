import React from 'react'

function Footer() {
    return ( <div>
         <footer className="bg-primary text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Column 1 - Brand / About */}
          <div className="col-md-3 mb-3 ">
            <img src="/roomly2.png" alt="roomly2_image" width={50} />
            <p className="mt-2">Roomly - Smart space management <br /> made  easy.</p>
            <p>&copy; 2025 Roomly. All rights reserved.</p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="col-md-3 mb-3 ">
            <h5 className='ms-5'>Quick Links</h5>
            <ul className="list-unstyled ms-5">
              <li><a href="#home" className="text-white text-decoration-none ">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#support" className="text-white text-decoration-none">Support</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact / Social */}
          <div className="col-md-3 mb-3 ">
            <h5>Contact Us</h5>
            <p>Email: support@roomly.com</p>
            <p>Phone: +977-123456789</p>
            <div>
              <a href="#" className="text-white me-2"><i className="fab fa-facebook fs-4"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-twitter fs-4"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-instagram fs-4"></i></a>
              <a href="#" className="text-white me-2"><i className="fa-brands fa-linkedin-in fs-4"></i></a>
            </div>
          </div>

           {/* Column 4 - Stay Updated */}
            <div className="col-md-3 mb-3 ">
              <h5>Stay Updated</h5>
              <p>Subscribe to get the latest offers, news, and updates directly in your inbox.</p>
              <form>
                <div className="mb-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-light btn-sm">Subscribe</button>
              </form>
            </div>


        </div>
      </div>
    </footer>
    </div> );
}

export default Footer;