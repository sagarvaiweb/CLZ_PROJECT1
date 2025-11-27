import React from "react";

const ServicesPage = () => {
  return (
    <div className="container py-5">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-6">Our Services</h1>
        <p className="text-muted fs-5">
          Roomly brings you simple, fast, and reliable room renting solutions.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="row g-4">

        {/* SERVICE CARD */}
        <div className="col-md-4">
          <div className="service-card shadow p-4 rounded-4 text-center">
            <i className="fa-solid fa-house fa-3x text-primary mb-3"></i>
            <h4 className="fw-bold">Room Listing</h4>
            <p className="text-muted mt-2">
              List rooms with photos, pricing & details to reach thousands of tenants.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-card shadow p-4 rounded-4 text-center">
            <i className="fa-solid fa-magnifying-glass fa-3x text-success mb-3"></i>
            <h4 className="fw-bold">Smart Search</h4>
            <p className="text-muted mt-2">
              Find rooms quickly with filters for price, location & amenities.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-card shadow p-4 rounded-4 text-center">
            <i className="fa-solid fa-shield-halved fa-3x text-warning mb-3"></i>
            <h4 className="fw-bold">Verified Profiles</h4>
            <p className="text-muted mt-2">
              Ensuring trusted listings for both room owners and tenants.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-card shadow p-4 rounded-4 text-center">
            <i className="fa-solid fa-headset fa-3x text-danger mb-3"></i>
            <h4 className="fw-bold">24/7 Support</h4>
            <p className="text-muted mt-2">
              Our team is always ready to assist you with any concerns.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-card shadow p-4 rounded-4 text-center">
            <i className="fa-solid fa-location-dot fa-3x text-info mb-3"></i>
            <h4 className="fw-bold">Location Insights</h4>
            <p className="text-muted mt-2">
              Learn about local areas, pricing trends & nearby facilities.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-card shadow p-4 rounded-4 text-center">
            <i className="fa-solid fa-handshake fa-3x text-secondary mb-3"></i>
            <h4 className="fw-bold">Secure Booking</h4>
            <p className="text-muted mt-2">
              Book rooms confidently with safe and transparent features.
            </p>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <h2 className="fw-bold">Ready to Find The Perfect Room?</h2>
        <p className="text-muted fs-5">Join thousands of happy users across Nepal.</p>
        <button className="btn btn-primary px-4 py-2 fs-5 rounded-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
