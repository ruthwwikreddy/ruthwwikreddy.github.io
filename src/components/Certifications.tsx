import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ZoomIn, ZoomOut, X } from 'lucide-react';

const Certifications = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [modalType, setModalType] = useState<'certificate' | 'offer' | null>(null);

  const certificates = [
    {
      id: 'special',
      url: '/images/Certificate Portfolio/AkkenapallyRuthwikReddy_Micro_Learning_Module_Certificate.png',
    },
    ...Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      url: `\\images\\Certificate Portfolio\\Certificate Portfolio-${String(i + 1).padStart(2, '0')}.png`
    }))
  ];

  const openModal = (index: number, type: 'certificate' | 'offer') => {
    setSelectedImageIndex(index);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
    setModalType(null);
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 3));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));

  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % certificates.length);
    }
  };

  const showPreviousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + certificates.length) % certificates.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPreviousImage();
      } else if (e.key === "+" || e.key === "=") {
        zoomIn();
      } else if (e.key === "-") {
        zoomOut();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-center mx-auto mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Certifications</h2>
        </div>

        <div className="mt-12">
          <div className="mt-4">
            <div className="relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {certificates.map((cert, index) => (
                  <div key={cert.id} className="bg-black border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group">
                    <button
                      onClick={() => openModal(index, 'certificate')}
                      className="block relative aspect-[4/3] overflow-hidden w-full"
                    >
                      <img
                        src={cert.url}
                        alt={`Certificate ${cert.id}`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter saturate-0 group-hover:saturate-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Award className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0" />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedImageIndex !== null && modalType === 'certificate' && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={closeModal}></div>

          <div className="relative z-10 max-w-7xl w-full h-full flex flex-col">
            <div className="flex justify-between items-center p-4">
              <div className="text-white text-lg">
                Certificate {selectedImageIndex + 1} of {certificates.length}
              </div>
              <div className="flex space-x-4">
                <button onClick={zoomIn} className="text-white/70 hover:text-white transition-colors">
                  <ZoomIn className="h-6 w-6" />
                </button>
                <button onClick={zoomOut} className="text-white/70 hover:text-white transition-colors">
                  <ZoomOut className="h-6 w-6" />
                </button>
                <button onClick={closeModal} className="text-white/70 hover:text-white transition-colors">
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center">
              <div
                className="cursor-move relative"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                {selectedImageIndex !== null && (
                  <img
                    src={certificates[selectedImageIndex].url}
                    alt={`Certificate ${certificates[selectedImageIndex].id}`}
                    className="max-h-[80vh] border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    style={{ maxWidth: '90vw' }}
                  />
                )}
              </div>
            </div>

            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={showPreviousImage}
                className="bg-white/10 rounded-full p-2 text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={showNextImage}
                className="bg-white/10 rounded-full p-2 text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
