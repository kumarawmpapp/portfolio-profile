import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      inquiryType: '',
      message: '',
    });
  };

  const inquiryOptions = [
    { value: '', label: 'Select an inquiry type' },
    { value: 'Freelance project proposal', label: 'Freelance project proposal' },
    { value: 'Website redesign', label: 'Website redesign' },
    { value: 'Partnership opportunity', label: 'Partnership opportunity' },
    { value: 'General question', label: 'General question' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 rounded-lg shadow-xl text-left bg-white">
      <FormInput
        label="Name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />

      <FormInput
        label="Email Address"
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your.email@example.com"
      />

      <FormSelect
        label="Inquiry Type"
        id="inquiryType"
        name="inquiryType"
        value={formData.inquiryType}
        onChange={handleChange}
        options={inquiryOptions}
        required
      />

      <FormInput
        label="Message"
        type="textarea"
        id="message"
        value={formData.message}
        onChange={handleChange}
        required={true}
        placeholder="Your Message..."
      />

      <button
        type="submit"
        className="flex mx-auto mt-10 w-1/2 bg-dark-blue-gray text-white justify-center font-bold py-3 px-6 rounded-md hover:bg-medium-blue-gray transition-colors shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;