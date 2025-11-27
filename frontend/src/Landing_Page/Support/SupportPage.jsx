import React from "react";

const SupportPage = () => {
  return (
    <div className="container py-5">

      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-6">Roomly Support</h1>
        <p className="text-muted fs-5">
          We’re here to help you 24/7. Find answers to common questions or contact us directly.
        </p>
      </div>

      {/* FAQ SECTION */}
      <div className="mb-5">
        <h2 className="fw-bold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeadingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="true" aria-controls="faqOne">
                How do I list my room on Roomly?
              </button>
            </h2>
            <div id="faqOne" className="accordion-collapse collapse show" aria-labelledby="faqHeadingOne" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Sign up as a property owner and click "List Your Room". Fill out the details, upload photos, and submit.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeadingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
                How can I book a room safely?
              </button>
            </h2>
            <div id="faqTwo" className="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                All listings are verified and our platform ensures secure payment and transparent communication with room owners.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeadingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
                I forgot my account password. What should I do?
              </button>
            </h2>
            <div id="faqThree" className="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Click on "Forgot Password" on the login page and follow the instructions to reset your password.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeadingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour" aria-expanded="false" aria-controls="faqFour">
                How do I contact Roomly support directly?
              </button>
            </h2>
            <div id="faqFour" className="accordion-collapse collapse" aria-labelledby="faqHeadingFour" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Use the contact form below or email us at support@roomly.com. We are available 24/7 for assistance.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div className="mb-5">
        <h2 className="fw-bold mb-4 text-center">Contact Us</h2>
        <form className="row g-3 shadow p-4 rounded-4">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="col-12">
            <label className="form-label">Subject</label>
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="col-12">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-4 py-2 rounded-3">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* CONTACT INFO CARDS */}
      <div className="row text-center g-4 mb-5">
        <div className="col-md-4">
          <div className="card shadow p-4 rounded-4 h-100">
            <i className="fa-solid fa-envelope fa-2x text-primary mb-3"></i>
            <h5 className="fw-bold">Email Support</h5>
            <p className="text-muted">support@roomly.com</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-4 rounded-4 h-100">
            <i className="fa-solid fa-phone fa-2x text-success mb-3"></i>
            <h5 className="fw-bold">Call Us</h5>
            <p className="text-muted">+977 1234567890</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-4 rounded-4 h-100">
            <i className="fa-solid fa-comments fa-2x text-warning mb-3"></i>
            <h5 className="fw-bold">Live Chat</h5>
            <p className="text-muted">Chat with our support team anytime</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SupportPage;
