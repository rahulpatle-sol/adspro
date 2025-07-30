import React from 'react'

const About = () => {
  return (
    <section className="bg-white py-12 px-4 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          At Light Up Ads, we blend creativity and strategy to deliver unforgettable branding experiences.
          Whether you're launching a startup or revamping your presence, we light the way with bold ideas and futuristic design.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <a href="/team" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">Meet the Team</a>
          <a href="/services" className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition">Our Services</a>
        </div>
      </div>
    </section>
  )
}

export default About
