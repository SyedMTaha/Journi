import React from 'react';

const FAQS = () => {
  const faqs = [
    {
      question: "How can I get started with JOURNI?",
      answer: "Simply fill out our contact form and our team will get in touch with you to discuss your project.",
    },
    {
      question: "What Services do you offer?",
      answer: "We provide services in mobile and web design, development, blockchain technology, and chatbot integration.",
    },
    {
      question: "How do I make a payment?",
      answer: "Payments can be made via credit card, PayPal, or bank transfer. We will provide detailed instructions upon project initiation.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide continuous support and maintenance services to ensure your project runs smoothly."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
      <p className="text-lg text-gray-600 mb-8">
        Find answers to common inquiries about our services and how we can help you.
      </p>

      {/* FAQ Grid */}
      <div className="flex flex-wrap -mx-4">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full md:w-1/2 px-4 mb-6">
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="font-semibold text-xl text-gray-800 mb-2">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
