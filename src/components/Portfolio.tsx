"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Moderní zavěšené schodiště",
      category: "Schodiště",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      tall: true,
    },
    {
      title: "Průmyslové lanové zábradlí",
      category: "Zábradlí",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      tall: false,
    },
    {
      title: "Kovový jídelní stůl na míru",
      category: "Nábytek",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      tall: false,
    },
    {
      title: "Spirálové ocelové schodiště",
      category: "Schodiště",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      tall: true,
    },
    {
      title: "Ocelové police na míru",
      category: "Nábytek",
      image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
      tall: false,
    },
    {
      title: "Skleněná panelová balustráda",
      category: "Zábradlí",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      tall: false,
    },
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 md:py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-orange-500 font-bold text-sm uppercase tracking-wider"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
          >
            Naše{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              mistrovská díla
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto"
          >
            Ukázka precizního řemesla a inovativního designu
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-900 ${
                project.tall ? "md:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block text-orange-500 text-sm font-semibold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="inline-flex items-center gap-2 text-white hover:text-orange-500 transition-colors">
                        Zobrazit detail
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-zinc-700/50 hover:border-orange-500/50 transition-all">
            Zobrazit celé portfolio
            <ExternalLink size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
