import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedShapes from './AnimatedShapes';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20 overflow-hidden">
      <AnimatedShapes />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="text-center"
        >
          <motion.div
            variants={textVariants}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold gradient-text inline-block">
              Hey, I'm Aritra
            </h1>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="mb-12"
          >
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Frontend Developer, UI/UX Designer, and Technical Writer crafting
              elevated, intuitive, and minimalistic experiences.
            </p>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="https://github.com/rayAritra" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-8 py-4 rounded-full inline-flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-2 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
