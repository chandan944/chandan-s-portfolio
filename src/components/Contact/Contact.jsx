import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [, setIsSent] = useState(false);

  // 🧠 Form field states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = name && email && subject && message;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
  import.meta.env.VITE_EMAIL_SERVICE_ID,
  import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          toast.success("📨 Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });

          // 🧹 Reset form and states
          form.current.reset();
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.error("Email Error:", error);
          toast.error("❌ Failed to send message.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[7vw] lg:px-[15vw] bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e] text-white"
    >
      <ToastContainer />

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold">📬 Contact Me</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base">
          I’d love to hear from you — whether it&apos;s a collaboration, opportunity,
          or just a hello! 👋
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-[8px] border border-white/10 rounded-2xl p-8 shadow-[0_0_80px_#8e44ad20] hover:shadow-purple-500/20 transition-all duration-300">
        <h3 className="text-xl font-semibold text-center mb-6">
          Let’s build something awesome together! 💡
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white/10 text-white p-3 rounded-md border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="email"
            name="from_name"
            placeholder="Your Email...."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 text-white p-3 rounded-md border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject...."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="bg-white/10 text-white p-3 rounded-md border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-white/10 text-white p-3 rounded-md border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
          />

          <button
            type="submit"
            disabled={!isFormValid}
            className={`flex items-center justify-center py-3 mt-2 rounded-md font-bold w-full transition-all duration-300 ${
              isFormValid
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 hover:shadow-md"
                : "cursor-not-allowed bg-gradient-to-r from-purple-600 to-pink-500 text-white "
            }`}
          >
            {isFormValid ? "Send" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
