import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_63gz2xs',
        'template_ohw15fy',
        {
          from_name: form.name,
          to_name: 'Jodi',
          from_email: form.email,
          to_email: 'jodiabrahams9@gmail.com',
          message: form.message,
        },
        'Vx50QTme9PSXQ21ZH'
      );

      setLoading(false);
      alert('Your message has been sent');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong!');
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container transform translate-y-4">
          {/* Added transform translate-y-4 */}
          <h3 className="head-text">Let's chat</h3>
          <p className="text-lg text-white-600 mt-3">
            Ready to bring your vision to life? Contact me to discuss your next web development project!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in ..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending ...' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                className="field-btn_arrow"
                alt="arrow-up"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;