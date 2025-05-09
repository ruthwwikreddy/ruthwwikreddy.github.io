
import { useState, useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Mouse movement tracker for the form
    const handleMouseMove = (e: MouseEvent) => {
      if (!formRef.current) return;
      const rect = formRef.current.getBoundingClientRect();
      
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const x = ((e.clientX - rect.left) / formRef.current.offsetWidth) * 100;
        const y = ((e.clientY - rect.top) / formRef.current.offsetHeight) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background effect with a subtle gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-primary/5 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto mt-12 relative">
          {isSubmitted ? (
            <div className="card backdrop-blur-lg p-8 text-center animate-fade-up">
              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <div className="w-16 h-16 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-4 animate-pulse-scale">
                  <CheckCircle className="w-8 h-8 text-portfolio-primary" />
                </div>
                <h3 className="text-2xl font-bold neon-text">Message Sent!</h3>
                <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <div 
              className="card backdrop-blur-lg p-8 hover:shadow-neon-glow transition-all duration-500 animate-fade-up"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(3, 41, 80, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%)`,
              }}
            >
              <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
                <div className="absolute inset-px rounded-lg border border-portfolio-primary/20 z-0"></div>
                <div className="absolute h-40 w-40 bg-portfolio-primary/30 blur-[100px] -bottom-20 -right-20 z-0"></div>
                <div className="absolute h-40 w-40 bg-portfolio-primary/20 blur-[100px] -top-20 -left-20 z-0"></div>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="relative group">
                  <label htmlFor="name" className={`block text-sm font-medium ${focusedField === 'name' ? 'text-portfolio-primary' : 'text-gray-300'} mb-1 transition-colors duration-300`}>
                    Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-md bg-black/60 border border-portfolio-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all hover:border-portfolio-primary/50"
                      data-cursor-text="Type here"
                    />
                    <div 
                      className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        boxShadow: 'inset 0 0 15px rgba(3, 41, 80, 0.3)',
                        background: 'radial-gradient(circle at center, rgba(3, 41, 80, 0.05) 0%, transparent 70%)'
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="relative group">
                  <label htmlFor="email" className={`block text-sm font-medium ${focusedField === 'email' ? 'text-portfolio-primary' : 'text-gray-300'} mb-1 transition-colors duration-300`}>
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-md bg-black/60 border border-portfolio-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all hover:border-portfolio-primary/50"
                      data-cursor-text="Type here"
                    />
                    <div 
                      className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        boxShadow: 'inset 0 0 15px rgba(3, 41, 80, 0.3)',
                        background: 'radial-gradient(circle at center, rgba(3, 41, 80, 0.05) 0%, transparent 70%)'
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="relative group">
                  <label htmlFor="message" className={`block text-sm font-medium ${focusedField === 'message' ? 'text-portfolio-primary' : 'text-gray-300'} mb-1 transition-colors duration-300`}>
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      placeholder="Your message..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-black/60 border border-portfolio-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-all resize-none hover:border-portfolio-primary/50"
                      data-cursor-text="Type here"
                    />
                    <div 
                      className={`absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 ${focusedField === 'message' ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        boxShadow: 'inset 0 0 15px rgba(3, 41, 80, 0.3)',
                        background: 'radial-gradient(circle at center, rgba(3, 41, 80, 0.05) 0%, transparent 70%)'
                      }}
                    ></div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center neo-trail relative overflow-hidden group ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  data-cursor-text={isSubmitting ? "Sending..." : "Send message"}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </span>
                  
                  {/* Button hover effect with animated border */}
                  <span className="absolute inset-0 overflow-hidden">
                    <span className="absolute inset-0 rounded-md group-hover:animate-pulse-glow bg-portfolio-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                </button>
              </form>
            </div>
          )}
          
          {/* Decorative elements */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-40 bg-portfolio-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-10 top-1/3 -translate-y-1/2 w-20 h-40 bg-portfolio-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
