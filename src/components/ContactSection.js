import React from 'react';
import ContactForm from './ContactForm';

function ContactSection({ contactRef }) {
  return (
    <section ref={contactRef} className="py-20 px-5 bg-light-gray text-dark-blue-gray text-center">
      <h2 className="text-4xl font-bold mb-8">
        Get in Touch
      </h2>
      <p className="text-xl mb-6">
        Have a project in mind or just want to say hello? Feel free to reach out!
      </p>
      <ContactForm />
    </section>
  );
}

export default ContactSection;