import { motion } from "motion/react";

type LabelItemProps = {
  text: string;
  delay?: number;
};

export function LabelItem({ text, delay = 0 }: LabelItemProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: false, amount: 0.9 }}
      transition={{ duration: 1, ease: 'easeOut', delay }}
    >
      <div className="bg-orange-100 px-5 py-2 border border-orange-300 rounded-full text-orange-500 w-fit hover:-translate-y-1 transition-all duration-500"
      >
        <p className="text-xs">{text}</p>
      </div>
    </motion.div>
  );
}
