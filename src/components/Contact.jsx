import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageSquare, Phone, MapPin } from "lucide-react";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6xe46zp",
        "template_zh84dwp",
        form.current,
        "UBbZcsuDMH0kwYrD3"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          alert("Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-950 text-gray-300 md:h-[125vh] h-[150vh] pb-20">
      <div className="text-center p-20 space-y-2">
        <p>Feel free to contact me anytime</p>
        <h2 className="text-3xl font-bold">Get in Touch</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:px-20 px-8">
        {/* ================= LEFT SIDE FORM ================= */}
        <motion.div
          className=""
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <h5 className="text-xl font-semibold">Message Me</h5>

            {/* Name */}
            <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 p-2 rounded-lg">
              <User size={18} className="text-gray-400" />
              <input
                name="user_name"
                type="text"
                required
                className="w-full bg-transparent outline-none text-white"
                placeholder="Name"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 p-2 rounded-lg">
              <Mail size={18} className="text-gray-400" />
              <input
                name="user_email"
                type="email"
                required
                className="w-full bg-transparent outline-none text-white"
                placeholder="Email"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 p-2 rounded-lg">
              <MessageSquare size={18} className="text-gray-400" />
              <input
                name="subject"
                type="text"
                required
                className="w-full bg-transparent outline-none text-white"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              required
              className="w-full bg-gray-800 border border-gray-700 p-2 rounded-lg outline-none text-white"
              placeholder="Message"
              rows={5}
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full p-2 rounded-xl bg-linear-to-r from-purple-600 to-green-400 text-gray-900 font-semibold shadow-lg hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* ================= RIGHT SIDE CONTACT INFO ================= */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-semibold">Contact Info</h4>
          <p className="text-gray-400 leading-relaxed">
            Always available for freelance work if the right project comes
            along. Feel free to reach out to me!
          </p>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-green-400" />
            <p className="text-gray-300">+234 806 906 2202</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-blue-400" />
            <p className="text-gray-300">sodiyaeritofunmi15@gmail.com</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-red-400" />
            <p className="text-gray-300">Lagos, Nigeria</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
