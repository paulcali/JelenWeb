"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Home, Sofa, Wrench, Building2, Drill } from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Building2,
      title: "Schodiště na míru",
      description:
        "Architektonická kovová schodiště kombinující bezpečnost, styl a strukturální integritu. Od moderních zavěšených schodů po klasické spirálníDesigny.",
      features: ["Strukturální analýza", "Individuální design", "Dle norem"],
    },
    {
      icon: Home,
      title: "Zábradlí a balustrády",
      description:
        "Interiérová i exteriérová zábradlí vyrobená pro trvanlivost a eleganci. K dispozici lana, sklo i tradiční kovové varianty.",
      features: ["Vnitřní i venkovní", "Různé povrchové úpravy", "Dle norem"],
    },
    {
      icon: Sofa,
      title: "Nábytek na míru",
      description:
        "Jedinečné kovové kusy nábytku. Stoly, police, svítidla a další navržené podle vašich specifikací.",
      features: ["Unikátní design", "Prémiové materiály", "Doživotní kvalita"],
    },
    {
      icon: Flame,
      title: "Svařování a kovářství",
      description:
        "Profesionální MIG, TIG a oblouková svařovací služby. Výroba z konstrukční oceli, hliníku a nerezové oceli.",
      features: ["Všechny kovy", "Výjezd k zákazníkovi", "Rychlé dodání"],
    },
    {
      icon: Wrench,
      title: "Opravy a renovace",
      description:
        "Odborná obnova stávajících kovových výrobků. Oprava koroze, strukturální posílení a renovace povrchu.",
      features: ["Posouzení škod", "Kvalitní opravy", "Jako nový"],
    },
    {
      icon: Drill,
      title: "Projekty na zakázku",
      description:
        "Máte jedinečnou vizi? Přivádíme kovové projekty k životu. Brány, pergoly, umělecká díla a speciální instalace.",
      features: ["Kompletní konzultace", "3D návrhy", "Řízení projektů"],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-zinc-950 to-zinc-900"
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
            Naše služby
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
          >
            Co{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              vytváříme
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto"
          >
            Od návrhu až po dokončení dodáváme výjimečné kovové výrobky, které
            obstojí v čase
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-orange-500" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:scale-105"
          >
            Požádat o cenovou nabídku
          </a>
        </motion.div>
      </div>
    </section>
  );
}
