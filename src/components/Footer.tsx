"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Domů", href: "#home" },
    { label: "O nás", href: "#about" },
    { label: "Služby", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Kontakt", href: "#contact" },
  ];

  const services = [
    { label: "Schodiště na míru", href: "#services" },
    { label: "Zábradlí a balustrády", href: "#services" },
    { label: "Nábytek na míru", href: "#services" },
    { label: "Svařování a kovářství", href: "#services" },
    { label: "Opravy a renovace", href: "#services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Zámečnictví <span className="text-orange-500">Zdeněk Daněk</span>
            </h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Prémiové zámečnické služby. Přeměňujeme ocel v umění již více než 7
              let.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Rychlé odkazy</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Naše služby</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-zinc-400 hover:text-orange-500 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">Oblast působení</h4>
            <p className="text-zinc-400 mb-4">
              Poskytujeme služby v Praze a okolí
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li>• Praha a střední Čechy</li>
              <li>• Středočeský kraj</li>
              <li>• Okolní okresy</li>
              <li>• Na vyžádání celá ČR</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-zinc-500 text-sm text-center md:text-left">
            &copy; {currentYear} Zámečnictví Zdeněk Daněk. Všechna práva
            vyhrazena.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-zinc-500 hover:text-orange-500 transition-colors"
            >
              Ochrana soukromí
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-orange-500 transition-colors"
            >
              Obchodní podmínky
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
