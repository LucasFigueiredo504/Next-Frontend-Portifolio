"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import LaptopImage from "../assets/laptop.png";
import Image from "next/image";
import { SubmitNotionForm } from "./actions/notion";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type SubmissionState = "idle" | "success" | "error";

export function Contact() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmissionState("idle");
      setErrorMessage("");

      const result = await SubmitNotionForm(data);

      if (result.success) {
        console.log("Form submitted:", data);
        setSubmissionState("success");
        reset();
      } else {
        setSubmissionState("error");
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionState("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  const dismissNotification = () => {
    setSubmissionState("idle");
    setErrorMessage("");
  };

  // Animation variants for subtle appear effect
  const appearVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full max-w-6xl">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={appearVariants}
          className="mb-12 md:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-medium tracking-tight text-primary mb-4"
            style={{ fontFamily: "var(--font-catamaran)" }}
          >
            Let's Work Together
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mt-3 sm:mt-4 rounded-full" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={appearVariants}
            className="w-full max-w-lg mx-auto md:mx-0 order-2 md:order-none"
          >
            {/* Success Notification */}
            {submissionState === "success" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={appearVariants}
                className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-2xl flex items-center justify-between text-accent"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
                <button
                  onClick={dismissNotification}
                  className="text-accent/70 hover:text-accent transition-colors"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )}

            {/* Error Notification */}
            {submissionState === "error" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={appearVariants}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-between text-red-300"
              >
                <div className="flex items-center gap-3">
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </div>
                <button
                  onClick={dismissNotification}
                  className="text-red-300/70 hover:text-red-300 transition-colors"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )}

            <div className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-slate-300 text-sm font-medium"
                >
                  <User size={16} />
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full px-4 py-2 sm:py-3 bg-transparent border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-slate-300 text-sm font-medium"
                >
                  <Mail size={16} />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-2 sm:py-3 bg-transparent border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-slate-300 text-sm font-medium"
                >
                  <MessageSquare size={16} />
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full px-4 py-2 sm:py-3 bg-transparent border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 py-2 sm:py-3 bg-accent text-gray-900 font-bold rounded-2xl hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={appearVariants}
            className="flex items-center justify-center md:justify-end order-1 md:order-none"
          >
            <div className="relative">
              <Image
                src={LaptopImage}
                alt="Laptop workspace"
                className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[450px] lg:max-w-[500px] h-auto object-cover rounded-2xl"
                width={500}
                height={300}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
