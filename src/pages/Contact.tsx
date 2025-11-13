import { Phone, Mail, MapPin, Send, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Instagram,
      title: 'Instagram',
      details: 'Send me a DM',
      subtext: 'Preferred contact method - Quick responses!',
      delay: 'stagger-delay-1',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Available for inquiries',
      subtext: 'For detailed discussions',
      delay: 'stagger-delay-2',
    },
    {
      icon: Phone,
      title: 'Consultation',
      details: 'Schedule a call',
      subtext: 'For personalized financial advice',
      delay: 'stagger-delay-3',
    },
  ];

  return (
    <div className="page-enter">
      <section className="bg-gradient-to-br from-slate-900 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fadeInDown">Let's Connect</h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fadeInLeft">
            Have questions about Finance, Taxation, or Investing? I'm here to help!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp ${info.delay}`}
                >
                  <div className="mb-4 inline-block p-4 bg-amber-100 rounded-lg">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-1">{info.details}</p>
                  <p className="text-gray-600">{info.subtext}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="audit">Audit Services</option>
                    <option value="tax">Tax Advisory</option>
                    <option value="consulting">Consulting</option>
                    <option value="accounting">Accounting Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>

              {submitted && (
                <div className="mt-6 p-4 bg-green-100 border-2 border-green-500 rounded-lg animate-fadeInUp">
                  <p className="text-green-700 font-semibold">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
            </div>

            <div className="animate-fadeInRight">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Why Connect With Us?</h3>
                  <ul className="space-y-4">
                    {[
                      'Expert team with proven track record',
                      'Personalized solutions for your needs',
                      'Quick response times',
                      'Free initial consultation',
                      'Transparent communication',
                      'Long-term partnership approach',
                    ].map((item, idx) => (
                      <li key={idx} className={`flex items-center gap-3 animate-fadeInLeft ${`stagger-delay-${(idx % 5) + 1}`}`}>
                        <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-gray-300 text-sm">
                    We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Visit us at any of our offices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: 'New York',
                address: '123 Financial Ave, NY 10001',
                phone: '+1 (555) 123-4567',
                delay: 'stagger-delay-1',
              },
              {
                city: 'Los Angeles',
                address: '456 Commerce Blvd, LA 90001',
                phone: '+1 (555) 234-5678',
                delay: 'stagger-delay-2',
              },
              {
                city: 'Chicago',
                address: '789 Business Pl, Chicago 60601',
                phone: '+1 (555) 345-6789',
                delay: 'stagger-delay-3',
              },
            ].map((location, idx) => (
              <div
                key={idx}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp ${location.delay}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.city}</h3>
                <p className="text-gray-600 mb-2 flex items-start gap-2">
                  <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                  {location.address}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Phone size={18} className="text-amber-500" />
                  {location.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
