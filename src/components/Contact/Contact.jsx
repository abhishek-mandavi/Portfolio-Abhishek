import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";

const Contact = () => {
  // Hooks
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cb9uvf1",
        "template_io55zmv",
        form.current,
        "_J3CZczmsFWEOvlVX"
      )
      .then(
        () => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          setError(true);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center relative z-10 px-4 py-12 md:py-20 text-white">
      <div className="max-w-3xl w-full text-white shadow-lg rounded-lg p-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text- #F2F3F4  dark:text-white mb-2">
          Contact
        </h2>
        <p className="text-lg text-center text-gray-300 dark:text-gray-400 mb-6">
          Feel free to reach out to me for any questions or opportunities!
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-gray-400 dark:text-gray-300 font-medium">
            Your Email
            <input
              type="email"
              name="from_email"
              required
              placeholder="Your Email"
              className="w-full mt-1 p-3 rounded-lg border text-black border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </label>

          <label className="text-gray-400 dark:text-gray-300 font-medium">
            Your Name
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your Name"
              className="w-full mt-1 p-3 rounded-lg border text-black border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </label>

          <label className="text-gray-400 dark:text-gray-300 font-medium">
            Subject
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full mt-1 p-3 rounded-lg border text-black border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </label>

          <label className="text-gray-400 dark:text-gray-300 font-medium">
            Message
            <textarea
              name="message"
              required
              placeholder="Your message..."
              rows="4"
              className="w-full mt-1 p-3 rounded-lg border text-black border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 rounded-lg transition"
          >
            Send
          </button>
        </form>

        {/* Snackbar Notifications */}
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            variant="filled"
          >
            Email sent successfully!
          </Alert>
        </Snackbar>

        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={() => setError(false)}
        >
          <Alert
            onClose={() => setError(false)}
            severity="error"
            variant="filled"
          >
            Failed to send email. Please try again.
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Contact;

