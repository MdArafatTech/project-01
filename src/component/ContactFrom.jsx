import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const formRef = useRef(null);

  // Initialize EmailJS securely with env vars
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "-dm5gWB-Fz--QlTIN");
  }, []);

  // Detect dark mode
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);
    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message || !formData.number) {
      setStatus("Please fill all fields.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    setIsLoading(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        "service_fel2b38",
        "template_2nb2qvj",
        {
          from_name: formData.name,
          from_email: formData.email,
          from_number: formData.number,
          message: formData.message,
        }
      );
      
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", number: "", email: "", message: "" });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("❌ Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className={`px-3 sm:px-6 lg:px-8 py-20 rounded-2xl shadow-2xl transition-all duration-700 ${
      darkMode 
        ? "bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100" 
        : "bg-gradient-to-br from-white to-gray-50 text-gray-900"
    }`}>
      <div className="max-w-2xl mx-auto lg:p-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-wider bg-gradient-to-r 
            from-red-500 to-pink-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'd love to hear from you!
          </p>
        </div>

        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`h-14 p-4 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-red-500/20 
                transition-all duration-300 group hover:shadow-lg ${
                darkMode
                  ? "bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-400 hover:border-red-500/50 shadow-xl"
                  : "bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500 hover:border-red-400 shadow-lg"
              }`}
              required
              disabled={isLoading}
            />
            
            <input
              type="tel"
              name="number"
              placeholder="📱 Phone Number"
              value={formData.number}
              onChange={handleChange}
              className={`h-14 p-4 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-red-500/20 
                transition-all duration-300 group hover:shadow-lg ${
                darkMode
                  ? "bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-400 hover:border-red-500/50 shadow-xl"
                  : "bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500 hover:border-red-400 shadow-lg"
              }`}
              required
              disabled={isLoading}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="📩 Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-14 p-4 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-red-500/20 
              transition-all duration-300 group hover:shadow-lg ${
              darkMode
                ? "bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-400 hover:border-red-500/50 shadow-xl"
                : "bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500 hover:border-red-400 shadow-lg"
            }`}
            required
            disabled={isLoading}
          />

          <textarea
            name="message"
            placeholder="✉️ Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className={`w-full p-6 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-red-500/20 
              transition-all duration-300 resize-vertical group hover:shadow-xl ${
              darkMode
                ? "bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-400 hover:border-red-500/50"
                : "bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500 hover:border-red-400"
            }`}
            required
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`group relative cursor-pointer w-full h-14 rounded-xl font-bold text-lg transition-all duration-300 
              overflow-hidden transform ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : darkMode
                ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-2xl hover:shadow-red-500/25 hover:-translate-y-1 hover:scale-[1.02]"
                : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 shadow-2xl hover:shadow-red-400/25 hover:-translate-y-1 hover:scale-[1.02]"
            } text-white`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </span>
            ) : (
              "Send Message 🚀"
            )}
          </button>

          {status && (
            <div className={`p-4 rounded-xl text-center font-semibold transition-all transform animate-pulse ${
              status.includes("success") || status.includes("✅")
                ? "bg-green-500/10 text-green-600 border border-green-500/30 backdrop-blur-sm"
                : "bg-red-500/10 text-red-600 border border-red-500/30 backdrop-blur-sm"
            }`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
