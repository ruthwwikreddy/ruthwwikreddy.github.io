import React, { useState } from 'react';
import { CheckCircle, Mail, MapPin, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  formData: ContactFormData;
  setFormData: (data: ContactFormData) => void;
}

const Contact = ({ formData, setFormData }: ContactProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to connect to the server. Please ensure the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Let's work <br />
                <span className="text-white/50">together.</span>
              </h2>
              <p className="text-lg text-white/70 max-w-md leading-relaxed">
                Have a project in mind? I'm always open to discussing new ideas,
                creative opportunities, and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Email Me</p>
                  <a href="mailto:akkenapally.reddy@gmail.com" className="text-lg text-white font-medium group-hover:underline decoration-white/30 underline-offset-4">
                    akkenapally.reddy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-white/5 border border-white/10">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Location</p>
                  <p className="text-lg text-white font-medium">
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="h-full min-h-[400px] flex items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                  <p className="text-white/60">I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="space-y-6 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors"
              >
                {errorMessage && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-black/80 transition-all duration-300"
                    placeholder="What's your name?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-black/80 transition-all duration-300"
                    placeholder="What's your email?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/70 ml-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-black/80 transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/50 focus:bg-black/80 transition-all duration-300 resize-none min-h-[150px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-xl bg-white text-black font-bold text-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
