"use client"
import React from 'react'

const Services = () => {
  return (
    <section className="bg-white py-12 px-4 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-lg mb-8">We offer a range of digital solutions tailored to elevate your brand and presence.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
            <p>Logo design, visual storytelling, and brand guidelines to make your mark unforgettable.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p>Responsive, cinematic interfaces with cutting-edge design elements and GSAP animations.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Digital Strategy</h3>
            <p>SEO, analytics, and performance optimization to grow your audience and reach.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
