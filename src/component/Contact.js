import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto p-4 pt-20 font-serif text-medium">
      <h2 className="font-serif text-4xl text-center">Contact Us</h2>
      <form className="max-w-lg mx-auto mt-4 p-4 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
