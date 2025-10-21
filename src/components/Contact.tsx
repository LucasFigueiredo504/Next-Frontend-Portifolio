"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { easeInOut, motion } from "motion/react";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  X,
  Linkedin,
  Github,
} from "lucide-react";
import { SubmitNotionForm } from "./actions/notion";
import { toast } from "sonner";

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
        toast.success("Message sent successfully!", {
          style: {
            background: "rgb(139 92 246 / 0.1)",
            border: "1px solid rgb(139 92 246 / 0.3)",
            borderRadius: "1rem",
            color: "rgb(196 181 253)",
            backdropFilter: "blur(8px)",
          },
          duration: 4000,
        });
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
      transition: { duration: 0.8, easeInOut },
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

          {/* Right Column - Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={appearVariants}
            className="flex items-center justify-center md:justify-end order-2 md:order-none pt-12 md:pt-0"
          >
            <div className="space-y-8 w-full">
              {/* Email */}
              <div className="space-y-3 p-6 bg-white/5 border border-white/10 rounded-2xl  transition-colors">
                <h3 className="text-lg font-medium text-primary flex items-center gap-2">
                  <Mail size={20} className="text-accent" />
                  Email
                </h3>
                <a
                  href="mailto:lucasfigueiredo.emanoel@gmail.com"
                  className="text-slate-400 hover:text-accent transition-colors block break-all"
                >
                  lucasfigueiredo.emanoel@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="space-y-3 p-6 bg-white/5 border border-white/10 rounded-2xl  transition-colors">
                <h3 className="text-lg font-medium text-primary flex items-center gap-2">
                  <Linkedin size={20} className="text-accent" />
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/lucas-emanoel-388733234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent transition-colors block"
                >
                  linkedin.com/in/lucas-emanoel-figueiredo-da-silva
                </a>
              </div>

              {/* GitHub */}
              <div className="space-y-3 p-6 bg-white/5 border border-white/10 rounded-2xl  transition-colors">
                <h3 className="text-lg font-medium text-primary flex items-center gap-2">
                  <Github size={20} className="text-accent" />
                  GitHub
                </h3>
                <a
                  href="https://github.com/lucastheldl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent transition-colors block"
                >
                  @LucasFigueiredo504
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
