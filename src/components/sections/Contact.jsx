"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Send, Mail, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // 1. Save to Firestore for backup
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // 2. Send email via FormSubmit (No API Keys needed)
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Portfolio Message: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please ensure you activated the email link or try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-accent-primary mx-auto rounded-full mb-6"></div>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Have a question or want to work together? Feel free to reach out. I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-card p-8 rounded-xl shadow-sm border border-black/5 dark:border-white/5">
                <h3 className="text-2xl font-bold text-text-main mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-1">Email</h4>
                      <a href={`mailto:${personal.email}`} className="text-text-main font-medium hover:text-accent-primary transition-colors">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-1">Location</h4>
                      <p className="text-text-main font-medium">
                        {personal.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-card p-8 rounded-xl shadow-sm border border-black/5 dark:border-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-main">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="w-full bg-bg-secondary border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-main">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="w-full bg-bg-secondary border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-text-main">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full bg-bg-secondary border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-main">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    rows={5}
                    className="w-full bg-bg-secondary border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all resize-none disabled:opacity-50"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>

                {status === "success" && (
                  <div className="bg-green-500/10 text-green-500 p-4 rounded-lg flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    <p>Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-500/10 text-red-500 p-4 rounded-lg flex items-center gap-2">
                    <AlertCircle size={20} />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-accent-primary hover:bg-accent-secondary text-white font-medium py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-accent-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
