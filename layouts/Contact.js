import React from 'react';
import { markdownify } from "@lib/utils/textConverter";
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  
  const showAlert = (message, title = 'Alert') => {
    window.alert(`${title}: ${message}`);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/submitform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });

      if (response.ok) {
        showAlert('Email sent successfully!', 'Success');
        event.target.reset();
      } else {
        const responseData = await response.json();
        showAlert(responseData.error || 'An error occurred while sending the email.', 'Error');
      }
    } catch (error) {
      console.error(error);
      showAlert('An error occurred while sending the email. Please try again later.', 'Error');
    }
  };

  return (
    <section className="section" style={{ backgroundColor: '#00308F', padding: '50px 0' }}>
      <div className="container" style={{ padding: '0 15px' }}>
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'white' }}>{title}</h2>
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  name="message"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5" style={{ padding: '0 15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <EmailIcon style={{ color: 'red', marginRight: '0.5rem' }} />
              <h4 style={{ color: 'red', marginBottom: 0 }}>{info.title}</h4>
            </div>
            <div style={{ color: 'white' }}>{markdownify(info.description, "p")}</div>
            <h4 style={{ color: 'red' }}>Note:</h4>
            <div style={{ color: 'white' }}>{markdownify(info.note, "p")}</div>
            <ul className="contact-list mt-5" style={{ color: 'white' }}>
              {info.contacts.map((contact, index) => (
                <li key={index} style={{ color: 'white' }}>
                  <strong style={{ color: 'white' }}>{markdownify(contact)}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
