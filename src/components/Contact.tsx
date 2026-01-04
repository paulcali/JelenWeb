"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Neplatná emailová adresa"),
  phone: z.string().min(9, "Telefonní číslo musí mít alespoň 9 číslic"),
  projectType: z.string().min(1, "Prosím vyberte typ projektu"),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      detail: "+420 123 456 789",
      link: "tel:+420123456789",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@danek-zamecnictvi.cz",
      link: "mailto:info@danek-zamecnictvi.cz",
    },
    {
      icon: MapPin,
      title: "Lokace",
      detail: "Praha, Česká republika",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-zinc-900 to-zinc-950"
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
            Kontaktujte nás
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
          >
            Začněte{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              svůj projekt
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto"
          >
            Připraveni realizovat vaši vizi? Získejte nezávaznou cenovou nabídku
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-start gap-4 p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <info.icon className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {info.title}
                    </h3>
                    <p className="text-zinc-400 group-hover:text-orange-500 transition-colors">
                      {info.detail}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Proč si vybrat nás?
              </h3>
              <ul className="space-y-3">
                {[
                  "7 let ověřené odbornosti",
                  "Prémiové materiály zaručeny",
                  "Bezplatné konzultace a nabídky",
                  "Včasné dodání projektů",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-zinc-300">
                    <CheckCircle2
                      className="text-orange-500 mr-3 flex-shrink-0"
                      size={20}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8"
            >
              {/* Name Field */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Celé jméno
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Jan Novák"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Emailová adresa
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="jan@priklad.cz"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-white font-semibold mb-2"
                >
                  Telefonní číslo
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="+420 123 456 789"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Project Type Field */}
              <div className="mb-6">
                <label
                  htmlFor="projectType"
                  className="block text-white font-semibold mb-2"
                >
                  Typ projektu
                </label>
                <select
                  {...register("projectType")}
                  id="projectType"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Vyberte službu</option>
                  <option value="staircase">Schodiště na míru</option>
                  <option value="railing">Zábradlí / Balustráda</option>
                  <option value="furniture">Nábytek na míru</option>
                  <option value="welding">Svařování a kovářství</option>
                  <option value="repair">Opravy a renovace</option>
                  <option value="custom">Projekt na zakázku</option>
                </select>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Detaily projektu
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Řekněte nám o vašem projektu..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  "Odesílání..."
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 size={20} />
                    Zpráva odeslána!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Získat cenovou nabídku
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
