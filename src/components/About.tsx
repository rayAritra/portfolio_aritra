import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            src='https://media.licdn.com/dms/image/v2/D5603AQEhoL458kYHeA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703477478154?e=1738195200&v=beta&t=AiPGK9GoAmdfoYBsHyYbR4IYsKzmqE13m0T3aMmxgcw'
            alt="Workspace"
            className="rounded-lg shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">A Brief Intro</h3>
            <p className="text-gray-600 mb-6">
              I am a Frontend Developer, UI/UX designer and Technical Writer
              based in Kalyani, India.I can design and develop full stack applications.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in crafting elevated, intuitive, and minimalistic designs
              for startups and small businesses to help them stand out in the digital
              landscape with a powerful impact.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/AritraSohan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/aritra-ray-236681293/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/rayAritra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/aritraray_2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Leetcode
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}