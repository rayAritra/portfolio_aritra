import { motion } from 'framer-motion';

const shapes = [
  {
    className: "w-16 h-16 bg-primary/20 rounded-full",
    initial: { x: -100, y: -100, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.2 }
  },
  {
    className: "w-24 h-24 bg-secondary/20 rounded-lg rotate-45",
    initial: { x: 100, y: -100, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.4 }
  },
  {
    className: "w-20 h-20 bg-accent/20 rounded-full",
    initial: { x: -100, y: 100, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.6 }
  },
  {
    className: "w-32 h-32 bg-primary/10 rounded-lg -rotate-12",
    initial: { x: 100, y: 100, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 }
  }
];

export default function AnimatedShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.className}`}
          initial={shape.initial}
          animate={shape.animate}
          transition={{
            ...shape.transition,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        />
      ))}
    </div>
  );
}