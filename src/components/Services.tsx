import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Pen, Palette } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications with modern technologies.',
    Icon: Code,
    color: 'primary',
  },
  {
    title: 'UI/UX Designing',
    description: 'Creating intuitive and beautiful user interfaces with great user experience.',
    Icon: Layout,
    color: 'secondary',
  },
  {
    title: 'Content Writing',
    description: 'Crafting engaging technical content and documentation.',
    Icon: Pen,
    color: 'accent',
  },
  {
    title: 'Branding',
    description: 'Developing unique brand identities and design systems.',
    Icon: Palette,
    color: 'primary',
  },
];

const tools = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Tailwind CSS',
  'React',
  'Node.js',
  'Git',
  'Figma',
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-5xl md:text-7xl font-bold text-center gradient-text mb-20"
        >
          SERVICES
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-4xl font-bold mb-6 text-primary"
            >
              my expertises.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-12"
            >
              I focus on all things design and web related. With each of my services,
              my goal is to deliver an impactful and elevating digital experience for
              everyone.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white p-6 rounded-lg shadow-lg card-hover border-t-4 border-${service.color}`}
                >
                  <service.Icon className={`w-8 h-8 mb-4 text-${service.color}`} />
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-4xl font-bold mb-6 text-secondary"
            >
              my digital tool box.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-12"
            >
              These are my go to tech stack to make any projects happen. I am always
              flexible to switch these tech stacks and I'm eager of learning more
              about my current stack, and new technologies that could expand my
              horizons.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-bold gradient-text"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}