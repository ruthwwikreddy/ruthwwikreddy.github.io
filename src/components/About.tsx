import React from 'react';

const About = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [
    "/images/Gallery/1-01.png",
    "/images/Gallery/1-02.png",
    "/images/Gallery/1-03.png",
    "/images/Gallery/1-04.png",
    "/images/Gallery/1-05.png",
    "/images/Gallery/1-06.png",
    "/images/Gallery/1-07.png",
    "/images/Gallery/1-08.png",
    "/images/Gallery/1-09.png",
    "/images/Gallery/1-10.png",
    "/images/Gallery/1-11.png"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black/80 to-black/95">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-center mx-auto mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h2>
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center w-full">
            {/* Left Column - Text Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 border-l-2 border-[#007BFF] pl-3 sm:pl-4 space-y-1 sm:space-y-2">
                <p>I'm Ruthwik Reddy, a 11th grader from P. Obul Reddy Public School.</p>
                <p>I build tech that solves real problems.</p>
                <p>I've won national innovation challenges but build to ship, not to win.</p>
                <p>Everything starts with: "What if...?"</p>
              </div>

              <div className="glass-card p-4 sm:p-5 rounded-lg mb-6 sm:mb-8">
                <h3 className="text-xl font-semibold mb-2">Key Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-[#007BFF]/20 px-2 py-1 rounded-full">Innovation</span>
                  <span className="text-sm bg-[#007BFF]/20 px-2 py-1 rounded-full">Robotics</span>
                  <span className="text-sm bg-[#007BFF]/20 px-2 py-1 rounded-full">Programming</span>
                  <span className="text-sm bg-[#007BFF]/20 px-2 py-1 rounded-full">Problem Solving</span>
                  <span className="text-sm bg-[#007BFF]/20 px-2 py-1 rounded-full">Leadership</span>
                </div>
              </div>

              <div className="glass-card p-4 sm:p-5 rounded-lg mb-6 sm:mb-8">
                <h3 className="text-xl font-semibold mb-2">Track Record</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center">
                    <span className="text-sm text-[#007BFF] mr-2">•</span>
                    <p>40+ tech projects built</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-[#007BFF] mr-2">•</span>
                    <p>20+ certifications earned</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-4 sm:p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Tech I Love</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-[#007BFF]/20 px-2 py-1 rounded-full">Python</span>
                  <span className="text-sm bg-[#007BFF]/20 px-2 py-1 rounded-full">React</span>
                  <span className="text-sm bg-[#007BFF]/20 px-2 py-1 rounded-full">No Code AI Tools</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image Carousel */}
            <div className="hidden sm:flex items-center justify-center h-full">
              <div className="relative w-full max-w-md h-full rounded-xl sm:rounded-2xl border border-[#007BFF]/20 overflow-hidden">
                <div key={currentImage} className="relative w-full h-full">
                  <img 
                    src={images[currentImage]} 
                    alt="Ruthwik" 
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-[#007BFF]/20 rounded-2xl m-2 pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Signature */}
          <div className="flex justify-end pt-10">
            <div className="inline-block text-foreground/90 text-xs sm:text-sm md:text-base font-medium border-t-2 border-[#007BFF]/50 pt-1.5 sm:pt-2 px-3 sm:px-4">
              <div className="inline-block" style={{ marginTop: '-43px', marginRight: '5px' }}>
                <img 
                  src="/images/Signature/SVG/4.svg" 
                  alt="Signature" 
                  className="h-24 sm:h-32 md:h-40 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
