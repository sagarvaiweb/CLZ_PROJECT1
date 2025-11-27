import React from "react";

const AboutPage = () => {
  return (
    <div className="container py-5">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-6">About Roomly</h1>
        <p className="text-muted fs-5">
          Simplifying room rentals across Nepal — connecting tenants and property owners seamlessly.
        </p>
      </div>

      {/* STORY / MISSION / VISION */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1610513492097-13a9a4c343c6?auto=format&fit=crop&w=800&q=80"
            alt="Roomly About"
            className="img-fluid rounded-4 shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Our Story</h2>
          <p className="text-muted fs-5">
            Roomly began with a simple vision — to make room renting fast, safe, and convenient.  
            We bridge the gap between tenants and property owners, providing a reliable platform for listings and verified profiles.
          </p>

          <h2 className="fw-bold mb-3 mt-4">Our Mission</h2>
          <p className="text-muted fs-5">
            We aim to transform the room rental experience in Nepal by ensuring transparency, trust, and seamless interactions between users.
          </p>

          <h2 className="fw-bold mb-3 mt-4">Our Vision</h2>
          <p className="text-muted fs-5">
            To become the most trusted room rental platform in Nepal, empowering both tenants and owners with technology-driven solutions.
          </p>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-4">Meet Our Team</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-3 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Team Member"
              className="img-fluid rounded-circle shadow mb-2"
            />
            <h5 className="fw-bold mt-2">Sagar Sk</h5>
            <p className="text-muted">Founder & CEO</p>
          </div>
          <div className="col-md-3 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Team Member"
              className="img-fluid rounded-circle shadow mb-2"
            />
            <h5 className="fw-bold mt-2">Aarati Sharma</h5>
            <p className="text-muted">CTO</p>
          </div>
          <div className="col-md-3 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/56.jpg"
              alt="Team Member"
              className="img-fluid rounded-circle shadow mb-2"
            />
            <h5 className="fw-bold mt-2">Ramesh Thapa</h5>
            <p className="text-muted">Lead Designer</p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="mb-5">
        <h2 className="fw-bold text-center mb-4">How Roomly Works</h2>
        <div className="row text-center g-4">
          <div className="col-md-3">
            <i className="fa-solid fa-magnifying-glass fa-2x text-primary mb-2"></i>
            <h5 className="fw-bold">Search Rooms</h5>
            <p className="text-muted">Easily browse rooms with smart filters.</p>
          </div>
          <div className="col-md-3">
            <i className="fa-solid fa-user-check fa-2x text-success mb-2"></i>
            <h5 className="fw-bold">Verified Profiles</h5>
            <p className="text-muted">Check room owner authenticity for safety.</p>
          </div>
          <div className="col-md-3">
            <i className="fa-solid fa-handshake fa-2x text-warning mb-2"></i>
            <h5 className="fw-bold">Book Securely</h5>
            <p className="text-muted">Reserve rooms with transparent and secure features.</p>
          </div>
          <div className="col-md-3">
            <i className="fa-solid fa-smile fa-2x text-info mb-2"></i>
            <h5 className="fw-bold">Move In</h5>
            <p className="text-muted">Enjoy your room without any hassle.</p>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="mb-5">
        <h2 className="fw-bold text-center mb-4">What Our Users Say</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4 text-center shadow p-4 rounded-4">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="User"
              className="img-fluid rounded-circle mb-2"
              width="80"
            />
            <p className="text-muted">
              "Roomly made it so easy to find a safe room near my university. Highly recommended!"
            </p>
            <h6 className="fw-bold">Sita Gurung</h6>
          </div>
          <div className="col-md-4 text-center shadow p-4 rounded-4">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="User"
              className="img-fluid rounded-circle mb-2"
              width="80"
            />
            <p className="text-muted">
              "As a room owner, Roomly helped me reach tenants quickly and securely."
            </p>
            <h6 className="fw-bold">Ramesh Khadka</h6>
          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS / STATS SECTION */}
      <div className="row text-center mb-5">
        <div className="col-md-3 mb-3">
          <h3 className="fw-bold text-primary">1000+</h3>
          <p className="text-muted">Rooms Listed</p>
        </div>
        <div className="col-md-3 mb-3">
          <h3 className="fw-bold text-success">5000+</h3>
          <p className="text-muted">Happy Users</p>
        </div>
        <div className="col-md-3 mb-3">
          <h3 className="fw-bold text-warning">100+</h3>
          <p className="text-muted">Verified Owners</p>
        </div>
        <div className="col-md-3 mb-3">
          <h3 className="fw-bold text-info">24/7</h3>
          <p className="text-muted">Support</p>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
