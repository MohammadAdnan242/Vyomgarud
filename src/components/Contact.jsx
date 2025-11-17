import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { addContactSubmission } from '../components/Mockdata';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission - will be connected to backend later
    addContactSubmission(formData);
    
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-25 px-[7.6923%] bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-15">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#ff7b00] mb-6"></div>
          <p className="text-lg text-white/70 max-w-[600px]">Ready to discuss your mission requirements? Contact our team.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-15 mt-15">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="flex flex-col gap-8">
              <div className="flex gap-5">
                <div className="text-[#ff7b00] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Email</p>
                  <p className="text-base text-white/85 font-medium">info@vyomgarud.com</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-[#ff7b00] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Phone</p>
                  <p className="text-base text-white/85 font-medium">+91 (XXX) XXX-XXXX</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-[#ff7b00] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-base text-white/85 font-medium">India</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white/0.03 border border-white/10 rounded-none p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/85 uppercase tracking-wide">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/20 rounded-none px-4 py-3.5 text-base text-white transition-all duration-300 focus:outline-none focus:border-[#ff7b00] focus:bg-white/8 placeholder:text-white/40"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/85 uppercase tracking-wide">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/20 rounded-none px-4 py-3.5 text-base text-white transition-all duration-300 focus:outline-none focus:border-[#ff7b00] focus:bg-white/8 placeholder:text-white/40"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-white/85 uppercase tracking-wide">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/20 rounded-none px-4 py-3.5 text-base text-white transition-all duration-300 focus:outline-none focus:border-[#ff7b00] focus:bg-white/8 placeholder:text-white/40"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="organization" className="text-sm font-medium text-white/85 uppercase tracking-wide">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/20 rounded-none px-4 py-3.5 text-base text-white transition-all duration-300 focus:outline-none focus:border-[#ff7b00] focus:bg-white/8 placeholder:text-white/40"
                  placeholder="Your Organization"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="message" className="text-sm font-medium text-white/85 uppercase tracking-wide">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="bg-white/5 border border-white/20 rounded-none px-4 py-3.5 text-base text-white transition-all duration-300 focus:outline-none focus:border-[#ff7b00] focus:bg-white/8 placeholder:text-white/40 resize-vertical min-h-[120px]"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button 
              type="submit" 
              className="mt-4 w-full bg-[#ff7b00] text-black border-none rounded-none px-8 py-4 text-base font-semibold cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-3 hover:bg-[#ff7b00]/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,123,0,0.3)] active:translate-y-0"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;