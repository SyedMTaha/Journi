import React, { useState } from 'react';

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why Choose JOURNI?",
      answer: "Our commitment to innovation and excellence ensures that we deliver top-notch solutions tailored to your needs.",
    },
    {
      question: "What Services do you offer?",
      answer: "We provide services in mobile and web design, development, blockchain technology, and chatbot integration.",
    },
    {
      question: "How can we get Started?",
      answer: "Simply contact us through our website or call us directly. Our team is ready to assist you with your project needs.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-10"> {/* Adjusted width and padding */}
      <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1> {/* Increased font size */}
      <div className="rounded-lg shadow-md "> {/* Added background color */}
        {faqs.map((faq, index) => (
          <div key={index}>
            <div 
              className="flex justify-between items-center p-6 cursor-pointer border-b border-gray-300"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-2xl text-gray-500">{activeIndex === index ? '-' : '+'}</span> {/* Increased toggle icon size */}
            </div>
            {activeIndex === index && (
              <div className="p-6 border-b border-gray-300 bg-white"> 
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQS;
