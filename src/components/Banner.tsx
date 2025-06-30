import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full">
        <div className="w-full overflow-hidden relative">
          <img 
            src="/images/banner.jpg" 
            alt="Project Banner" 
            className="w-full h-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
