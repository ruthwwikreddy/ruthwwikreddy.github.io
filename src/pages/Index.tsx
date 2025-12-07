import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import { CaseStudyCarousel } from "@/components/portfolio/CaseStudyCarousel";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Links from "@/components/Links";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    window.scrollTo(0, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-4xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          >
            RR
          </motion.div>
        </motion.div>
      ) : (
        <div className="min-h-screen w-full bg-black flex justify-center overflow-x-hidden">
          <div className="w-full max-w-7xl bg-black relative">
            <Navbar />
            <CustomCursor />
            <div className="flex flex-col w-full">
              <main className="flex-1 w-full">
                <Hero />

                {/* Banner Section */}
                <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                  >
                    <img
                      src="/images/banner.jpg"
                      alt="Banner"
                      className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  </motion.div>
                </div>

                <About />
                <CaseStudyCarousel />
                <Links />
                <Certifications />
                <Contact
                  formData={contactFormData}
                  setFormData={setContactFormData}
                />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Index;
