"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, User, MessageSquare, CheckCircle } from "lucide-react";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="w-full bg-background">
      <div className="container mx-auto px-6 py-16 flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-light tracking-tight text-primary mb-4">
            Let's Work Together
          </h2>
          <p className="max-w-md text-slate-400">
            Ready to start your next project? Send me a message and let's
            discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="w-full max-w-lg">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 text-green-400">
              <CheckCircle size={20} />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
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
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
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
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
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
                rows={6}
                {...register("message")}
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project, ideas, or how we can work together..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-accent text-gray-900 font-bold rounded-2xl hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
        </div>
      </div>
    </div>
  );
}
