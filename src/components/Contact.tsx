import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-5xl md:text-7xl font-bold text-center text-gray-400 mb-20"
        >
          CONTACT
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <h3 className="text-4xl font-bold mb-6">Have an awesome idea?</h3>
            <h3 className="text-4xl font-bold mb-8">Let's bring it to life.</h3>
            <p className="text-gray-600 mb-12">
              Just drop me your details if you want to get in touch with me or have
              a freelancing gig for me!! I will reach out to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Your name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Your email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Your message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors resize-none"
                  rows={4}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              <p className="text-gray-600">aritra.sohan@gmail.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">My Digital Spaces</h3>
              <div className="space-y-4">
                {[
                  { label: 'Github', href: 'https://github.com/rayAritra', Icon: Github },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aritra-ray-236681293/', Icon: Linkedin },
                  { label: 'Twitter', href: 'https://twitter.com/AritraSohan', Icon: Twitter },
                  
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Kolkata, India</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{currentTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
