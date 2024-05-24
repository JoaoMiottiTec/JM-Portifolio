'use client';
import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section className="bg-transparent py-12">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-7xl font-bold mb-8 text-black dark:text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-black dark:text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-transparent border dark:border-gray-700 border-gray-300 rounded-md text-black dark:text-white focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-black dark:text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-transparent border dark:border-gray-700 border-gray-300 rounded-md text-black dark:text-white focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-black dark:text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-transparent border dark:border-gray-700 border-gray-300 rounded-md text-black dark:text-white focus:ring focus:ring-opacity-50"
              rows={5}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md focus:ring focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
        {isSubmitted && (
          <p className="mt-4 text-lg text-green-500">Email sent successfully!</p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
