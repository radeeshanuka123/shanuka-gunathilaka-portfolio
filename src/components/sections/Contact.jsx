"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const onSubmit = async (data) => {
    // Honeypot check
    if (data.botField) {
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/shanukagunathilaka00@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          organization: data.organization || "None provided",
          opportunity: data.opportunity,
          subject: data.subject,
          message: data.message,
          _subject: `New Portfolio Contact: ${data.subject}`,
          _template: "box"
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="text-center md:text-left mb-12"
        >
          <SectionHeading title="Let's Connect" subtitle="Contact" className="mb-4" />
          <p className="text-text-muted text-lg max-w-2xl text-balance">
            Whether you have a software project in mind, an educational opportunity, or just want to say hello, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <Card className="flex items-start gap-4 p-6 bg-card/60">
              <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Email</h4>
                <a href={`mailto:${portfolioData.personal.email}`} className="text-lg font-medium text-text-main hover:text-accent-primary transition-colors">
                  {portfolioData.personal.email}
                </a>
              </div>
            </Card>

            <Card className="flex items-start gap-4 p-6 bg-card/60">
              <div className="w-12 h-12 rounded-full bg-accent-secondary/10 flex items-center justify-center text-accent-secondary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Location</h4>
                <p className="text-lg font-medium text-text-main">
                  {portfolioData.personal.location}
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Honeypot */}
                <input type="text" {...register("botField")} className="hidden" aria-hidden="true" tabIndex="-1" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-main">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      className={cn(
                        "w-full px-4 py-3 rounded-md bg-secondary border transition-colors focus:outline-none focus:ring-2",
                        errors.name ? "border-red-500 focus:ring-red-500/20 text-red-500" : "border-border-subtle focus:border-accent-primary focus:ring-accent-primary/20 text-text-main"
                      )}
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required", maxLength: { value: 100, message: "Max 100 characters" } })}
                    />
                    {errors.name && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-main">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className={cn(
                        "w-full px-4 py-3 rounded-md bg-secondary border transition-colors focus:outline-none focus:ring-2",
                        errors.email ? "border-red-500 focus:ring-red-500/20 text-red-500" : "border-border-subtle focus:border-accent-primary focus:ring-accent-primary/20 text-text-main"
                      )}
                      placeholder="john@example.com"
                      {...register("email", { 
                        required: "Email is required", 
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } 
                      })}
                    />
                    {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-text-main">Organization (Optional)</label>
                    <input
                      id="organization"
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-secondary border border-border-subtle focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-colors focus:outline-none text-text-main"
                      placeholder="Company or University"
                      {...register("organization", { maxLength: 120 })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="opportunity" className="text-sm font-medium text-text-main">Opportunity Type</label>
                    <select
                      id="opportunity"
                      className="w-full px-4 py-3 rounded-md bg-secondary border border-border-subtle focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-colors focus:outline-none text-text-main appearance-none"
                      {...register("opportunity")}
                    >
                      <option value="Software Development">Software Development</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Teaching">Teaching</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Freelance Project">Freelance Project</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-text-main">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className={cn(
                      "w-full px-4 py-3 rounded-md bg-secondary border transition-colors focus:outline-none focus:ring-2",
                      errors.subject ? "border-red-500 focus:ring-red-500/20 text-red-500" : "border-border-subtle focus:border-accent-primary focus:ring-accent-primary/20 text-text-main"
                    )}
                    placeholder="How can we work together?"
                    {...register("subject", { required: "Subject is required", maxLength: { value: 150, message: "Max 150 characters" } })}
                  />
                  {errors.subject && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-main">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className={cn(
                      "w-full px-4 py-3 rounded-md bg-secondary border transition-colors focus:outline-none focus:ring-2 resize-none",
                      errors.message ? "border-red-500 focus:ring-red-500/20 text-red-500" : "border-border-subtle focus:border-accent-primary focus:ring-accent-primary/20 text-text-main"
                    )}
                    placeholder="Tell me about your project or opportunity..."
                    {...register("message", { required: "Message is required", maxLength: { value: 2000, message: "Max 2000 characters" } })}
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto min-w-[160px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} /> Send Message
                    </span>
                  )}
                </Button>

                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-md bg-success/10 border border-success/20 text-success flex items-center gap-2"
                    >
                      <CheckCircle2 size={18} />
                      <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-2"
                    >
                      <AlertCircle size={18} />
                      <span className="text-sm font-medium">Failed to send message. Please try again or email me directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
